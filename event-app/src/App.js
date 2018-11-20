
import event from './event'
import React, { Component } from 'react';

import Agenda from './Agenda.js';

import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.event = event;
  }
  
  render() {
    return (
      <div className="App">
         <header>
           <h1>{this.event.title}</h1>
           <p>{this.event.subtitle}</p>
           <Agenda sessions={this.event.sessions} />
          </header>
      </div>
    );
  }
}

export default App;

