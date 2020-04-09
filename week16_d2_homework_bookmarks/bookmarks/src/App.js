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
        <h2>Add A New Bookmark</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="website-name">Website name</label>
            <input type="text" class="form-control" id="title" name="title" onChange={this.handleChange} placeholder="Enter site name" />
          </div>
          <div class="form-group">
            <label htmlFor="website-url">Website URL</label>
            <input type="text" class="form-control" id="url" name="url" onChange={this.handleChange} placeholder="URL" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}







class App extends React.Component {

  state = {
    bookmarks: []
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


  render() {
    return (
      <div className="app">
        <div className="navBar">
          <h1>Bookmarks</h1>
        </div>
        <NewBookmarkForm baseURL={baseURL} handleAddBookmark={this.handleAddBookmark} />
        <div className="bookmarks-container">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Bookmarks List</th>
              </tr>
            </thead>
            <tbody>
            {this.state.bookmarks.map(bookmark => (
              <tr key={bookmark._id}>
                <td>
                  <a href={bookmark.url} target="_blank">{bookmark.title}</a> 
                  <button type="button" onClick={() => this.deleteBookmark(bookmark._id)} class="btn btn-outline-info" id="edit-bookmark-button">Edit</button>
                  <button type="button" onClick={() => this.deleteBookmark(bookmark._id)} class="btn btn-outline-danger" id="delete-bookmark-button">Delete</button>
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
