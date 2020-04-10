import React, {Component} from 'react';
import './App.css';
// import NewAnimalForm from "./Components/NewAnimalForm.js";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

console.log("current base URL:", baseURL);

fetch(baseURL + "/animals")
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


class NewAnimalForm extends React.Component {

  state = {
    name: '',
    species: '',
    breed: '',
    image: '',
    age: 0,
    adopted: false,
    personalityTraits: []
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.baseURL + "/animals", {
      method: "POST",
      body: JSON.stringify({ 
          name: this.state.name,
          species: this.state.species,
          breed: this.state.breed,
          image: this.state.image,
          age: this.state.age
         }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(resJson => {
      this.props.handleAddAnimal(resJson);
      this.setState({
        name: '',
        species: '',
        breed: '',
        image: '',
        age: ''
      });
    })
    .catch(error => console.error({ Error: error }));
  }

  render() {
    return(
      <div className="form-container">
        <h3>Add A New Animal</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" onChange={this.handleChange} placeholder="Name" />
          </div>
          <div class="form-group">
            <label htmlFor="species">Species</label>
            <input type="text" class="form-control" id="species" name="species" onChange={this.handleChange} placeholder="Species" />
          </div>
          <div class="form-group">
            <label htmlFor="breed">Breed</label>
            <input type="text" class="form-control" id="breed" name="breed" onChange={this.handleChange} placeholder="Breed" />
          </div>
          <div class="form-group">
            <label htmlFor="image">Image URL</label>
            <input type="text" class="form-control" id="image" name="image" onChange={this.handleChange} placeholder="Image URL" />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" class="form-control" id="age" name="age" onChange={this.handleChange} placeholder="Age" />
          </div>
          <button type="submit" class="btn btn-outline-primary" id="add-bookmark-button">Submit</button>
        </form>
      </div>
    );
  }
}


class App extends Component {
  state = {
    animals: []
  }

  getAnimals = () => {
    fetch(baseURL + "/animals")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData => this.setState({ animals: parsedData }),
        err => console.log(err)
      );
  };

  handleAddAnimal = animal => {
    const copyAnimals = [...this.state.animals];
    copyAnimals.unshift(animal);
    this.setState({
      animals: copyAnimals,
      name: '',
      species: '',
      breed: '',
      image: '',
      age: '',
      animal: {}
    });
  };

  deleteAnimal = id => {
    fetch(baseURL + "/animals/" + id, {
      method: 'DELETE'
    }).then( res => {
      const animalArr = this.state.animals.filter( animal => {
        return animal._id !== id
      })
      this.setState({animals: animalArr})
    })
  }

  toggleAdopted = (animal) => {
    fetch(baseURL + '/animals/' + animal._id, {
      method: 'PUT',
      body: JSON.stringify({adopted: !animal.adopted}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
         const copyAnimals = [...this.state.animals]
          const findIndex = this.state.animals.findIndex(animal => animal._id === resJson._id)
          copyAnimals[findIndex].adopted = resJson.adopted
          this.setState({animals: copyAnimals})
    })
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <h1>Animal Shelter</h1>
        </div>
        <div className="form-app-container">
          <NewAnimalForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal} />
        </div>
        <div className="animals-container">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col"><h5>Name</h5></th>
                <th scope="col"><h5>Species</h5></th>
                <th scope="col"><h5>Breed</h5></th>
                <th scope="col"><h5>Image</h5></th>
                <th scope="col"><h5>Age</h5></th>
                <th scope="col"><h5>Status</h5></th>
                <th scope="col"><h5>Options</h5></th>
              </tr>
            </thead>
            <tbody>
              {this.state.animals.map(animal => (
                <tr key={animal._id}>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.breed}</td>
                  <td className="button-td"><img src={animal.image} alt="Animal Image"></img></td>
                  <td>{animal.age}</td>
                  <td>{animal.adopted}</td>
                  <td className="button-td"><button type="button" onClick={() => this.deleteAnimal(animal._id)} class="btn btn-outline-danger btn-sm" id="animal-list-button">Remove</button></td>
                </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.getAnimals();
  }
}

export default App;
