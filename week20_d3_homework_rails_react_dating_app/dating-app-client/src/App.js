import React, { Component } from 'react';
import Daters from './components/Hello.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Title</header>
          <div class="HolyGrail-body">
            <nav class="HolyGrail-nav"><Daters /></nav>
            <main class="HolyGrail-content">1</main>
            <aside class="HolyGrail-ads"><Daters /></aside>
          </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
