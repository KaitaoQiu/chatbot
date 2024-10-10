import './App.css';
import React from 'react';
import { Component } from 'react';
import { connect, sendMsg } from './api';

class App extends Component{
  constructor(props) {
    super(props);
    connect();
    // this.state = {
    //   response: ''
    // };
  }

  send() {
    console.log("sending message");
    sendMsg("Hello, sending... from send()");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.send}>Send</button>
        </header>
      </div>
    );
  }
}

export default App;