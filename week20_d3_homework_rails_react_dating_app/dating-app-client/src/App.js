import React, { Component } from 'react';
import Daters from './components/Hello.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Title</header>
          <Daters />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
