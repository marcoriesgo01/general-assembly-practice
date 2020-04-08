import React, {Component} from 'react';
import './App.css';
import NewAnimalForm from "./Components/NewAnimalForm.js";

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
      age: Number,
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
        <header>
          <h1>Animal Shelter</h1>
        </header>
        <div className="App">
          <h2>Add A New Animal</h2>
          <NewAnimalForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal} />
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Species</th>
                <th scope="col">Breed</th>
                <th scope="col">Image</th>
                <th scope="col">Age</th>
                <th scope="col">Adoption Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.animals.map(animal => (
                <tr key={animal._id}>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.breed}</td>
                  <td>{animal.image}</td>
                  <td>{animal.age}</td>
                  <td>{animal.adopted}</td>
                  <td onDoubleClick={() => this.toggleAdopted(animal)}>{animal.adopted}</td>
                  <td onClick={() => this.deleteAnimal(animal._id)}>X</td>
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
