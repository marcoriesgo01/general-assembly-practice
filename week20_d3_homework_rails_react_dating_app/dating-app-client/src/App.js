import React, { Component } from 'react';
import Daters from './components/Hello.js'
import NewDater from './components/NewDater'

class App extends Component {

  handleAdd = (event, formInputs) =>{
    event.preventDefault()
    fetch('http://localhost:3000/users',{
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdDater => console.log(createdDater.json()))
    .catch(error => console.log(error))
    }

  render() {
    return (
      <div className="App">
        <h1>Online Dating</h1>
          <Daters />
        <footer><NewDater handleSubmit = {this.handleAdd} /></footer>
      </div>
    );
  }
}

export default App;
