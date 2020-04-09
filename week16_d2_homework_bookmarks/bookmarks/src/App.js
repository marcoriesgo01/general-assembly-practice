import React, {Component} from 'react';
import './App.css';
let baseURL = "http://localhost:3003";

console.log("current base URL:", baseURL);

fetch(baseURL + "/bookmarks")
  .then(
    data => {
      return data.json();
    },
    err => console.log(err)
  )
  .then(
    parsedData => console.log(parsedData),
    err => console.log(err)
);








class NewBookmarkForm extends React.Component {

  state = {
    title: '',
    url: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.baseURL + "/bookmarks", {
      method: "POST",
      body: JSON.stringify({ 
          title: this.state.title,
          url: this.state.url
          }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(resJson => {
      this.props.handleAddBookmark(resJson);
      this.setState({
        title: '',
        url: ''
      });
    })
    .catch(error => console.error({ Error: error }));
  }

  render() {
    return(
      <div className="form-container">
        <h3>Add A New Bookmark</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="website-name">Website name</label>
            <input type="text" class="form-control" id="title" name="title" onChange={this.handleChange} placeholder="Enter site name" />
          </div>
          <div class="form-group">
            <label htmlFor="website-url">Website URL</label>
            <input type="text" class="form-control" id="url" name="url" onChange={this.handleChange} placeholder="URL" />
          </div>
          <button type="submit" class="btn btn-outline-primary" id="add-bookmark-button">Submit</button>
        </form>
      </div>
    );
  }
}




class EditBookmarkForm extends React.Component {

  state = {
    title: '',
    url: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.baseURL + "/bookmarks/" + this.props.bookmark._id, {
      method: "PUT",
      body: JSON.stringify({ 
          title: this.state.title,
          url: this.state.url
          }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(resJson => {
      this.props.editBookmark(resJson);
    })
    .then(event => {
      this.props.closeEditForm(event)
    })
    .catch(error => console.error({ Error: error }));
  }

  render() {
    return(
      <div className="form-container">
        <h3>Edit {this.props.bookmark.title} Bookmark</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="website-name">Website name</label>
            <input type="text" class="form-control" id="title" name="title" onChange={this.handleChange} placeholder={this.props.bookmark.title} />
          </div>
          <div class="form-group">
            <label htmlFor="website-url">Website URL</label>
            <input type="text" class="form-control" id="url" name="url" onChange={this.handleChange} placeholder={this.props.bookmark.url} />
          </div>
          <button type="submit" class="btn btn-outline-success" id="submit-edit-button">Complete</button>
        </form>
        <button type="button" onClick={(event) => this.props.closeEditForm(event)} class="btn btn-outline-secondary" id="cancel-edit-button">Cancel</button>
      </div>
    );
  }
}




class App extends React.Component {

  state = {
    bookmarks: [],
    addBookmarkForm: true
  }

  getBookmarks = () => {
    fetch(baseURL + "/bookmarks")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedBookmarkData => this.setState({bookmarks: parsedBookmarkData}),
        err => console.log(err)
    );
  };

  
  handleAddBookmark = bookmark => {
    const copyBookmarks = [...this.state.bookmarks];
    copyBookmarks.unshift(bookmark);
    this.setState({
      bookmarks: copyBookmarks,
      title: '',
      url: ''
    });
  }

  deleteBookmark = id => {
    fetch(baseURL + "/bookmarks/" + id, {
      method: 'DELETE'
    }).then( res => {
      const bookmarkArr = this.state.bookmarks.filter( bookmark => {
        return bookmark._id !== id
      })
      this.setState({
        bookmarks: bookmarkArr,
        bookmark: false
      })
    })
  }

  getBookmark = bookmark => {
    this.setState({
      bookmark,
      editBookmarkForm: true,
      addBookmarkForm: false
    })
  }


  editBookmark = (resJson) => {
    const copyBookmarks = [...this.state.bookmarks]
    const findIndex = this.state.bookmarks.findIndex(bookmark => bookmark._id === bookmark._id)
    copyBookmarks[findIndex].title = resJson.title
    copyBookmarks[findIndex].url = resJson.url
    this.setState({bookmarks: copyBookmarks})
  }

  handleEditBookmarkSubmit = () => {
    this.setState({
      editBookmarkForm: false,
      addBookmarkForm: true
    });
  }


  render() {
    return (
      <div className="app">
        <div className="navBar">
          <h1>Bookmark'd</h1>
        </div>
        <div className="form-app-container">
        { this.state.addBookmarkForm ? <NewBookmarkForm baseURL={baseURL} handleAddBookmark={this.handleAddBookmark} /> : null }
        { this.state.editBookmarkForm ? <EditBookmarkForm baseURL={baseURL} bookmark={this.state.bookmark} closeEditForm={this.handleEditBookmarkSubmit} editBookmark={this.editBookmark} /> : null }
        </div>
        <div className="bookmarks-container">
          <table class="table-hover">
            <thead>
              <tr>
                <th scope="col"><h3>Bookmarks List</h3></th>
              </tr>
            </thead>
            <tbody>
            {this.state.bookmarks.map(bookmark => (
              <tr key={bookmark._id}>
                <td>
                  <a href={bookmark.url} target="_blank"><h5>{bookmark.title}</h5></a>
                  <div className="list-buttons-container">
                    <button type="button" onClick={() => this.getBookmark(bookmark)} class="btn btn-outline-info btn-sm" id="edit-bookmark-button">Edit</button>
                    <button type="button" onClick={() => this.deleteBookmark(bookmark._id)} class="btn btn-outline-danger btn-sm" id="delete-bookmark-button">Delete</button>
                  </div>
                </td>
              </tr>
              )
            )}
            </tbody>
          </table>
        </div>
    </div>
    );
  }
  componentDidMount() {
    this.getBookmarks();
  }
}

export default App;
