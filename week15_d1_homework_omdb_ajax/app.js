class MovieInfo extends React.Component {
  render() {
    return (
      <div class="movieInfoContainer">
        <h2 id="title">{this.props.movie.Title} ({this.props.movie.Year})</h2>
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
        <h2>Genre</h2>
        <h4>{this.props.movie.Genre}</h4>
        <h2>Runtime</h2>
        <h4>{this.props.movie.Runtime}</h4>
        <h2>Rated</h2>
        <h4>{this.props.movie.Rated}</h4>
        <h2>Plot</h2>
        <h4>{this.props.movie.Plot}</h4>
        <h2>Box Office</h2>
        <h4>{this.props.movie.BoxOffice}</h4>
      </div>
    );
  }
}

class OMDBQueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    baseURL: "http://www.omdbapi.com/?",
    apikey: "apikey=98e3fb1f",
    query: "&t=",
    movieTitle: "",
    searchURL: "",
    movie: ""
    }
  };
  
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle
      },
      () => {
        fetch(this.state.searchURL)
          .then(response => {
            return response.json();
          })
          .then(
            json =>
              this.setState({
                movie: json,
                movieTitle: ""
              }),
            err => console.log(err)
          );
      }
    );
  };
  componentDidMount() {
    this.setState(
      () => {
        fetch("http://www.omdbapi.com/?apikey=98e3fb1f&t=pulp+fiction")
          .then(response => {
            return response.json();
          })
          .then(
            json =>
              this.setState({
                movie: json,
                movieTitle: ""
              }),
            err => console.log(err)
          );
      }
      )
      console.log(this.state.movie.Cast)
    return (
        <React.Fragment>
            {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ""}
        </React.Fragment>
    )
}

  render() {
    return (
    <React.Fragment>
      <div class="navBar">
        <div class="logo">
          <h1>MovieDB</h1>
          <p>Discover Films</p>
        </div>
        <form class="searchForm" onSubmit={this.handleSubmit}>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
            placeHolder="Movie Title"
          />
          <input type="submit" class="btn btn-warning btn-lg" value="Find Movie" />
        </form>
      </div>
      {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ""}
    </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return <OMDBQueryForm />;
  }
}



ReactDOM.render(
    <App />,
    document.querySelector('.contentContainer')
  )