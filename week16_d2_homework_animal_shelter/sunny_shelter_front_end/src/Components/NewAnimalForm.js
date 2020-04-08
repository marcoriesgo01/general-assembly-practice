import React from 'react'

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
          age: Number
        });
      })
      .catch(error => console.error({ Error: error }));
  };

render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
            <input type="text" id="species" name="species" onChange={this.handleChange} value={this.state.species} placeholder="Species"/>
            <input type="text" id="breed" name="breed" onChange={this.handleChange} value={this.state.breed} placeholder="Breed"/>
            <input type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} placeholder="Image URL"/>
            <input type="number" id="age" name="age" onChange={this.handleChange} value={this.state.age} placeholder="Age"/>
            <input type="submit" id="submitButton" value="Enter"/>
        </form>
    )
  }
}

export default NewAnimalForm