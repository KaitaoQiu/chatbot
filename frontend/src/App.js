import './App.css';
import React from 'react';
import { Component } from 'react';
import { connect, sendMsg } from './api';
// import Header from './components/Header/Header';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    };
    // connect();
    // this.state = {
    //   response: ''
    // };
  }
  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
  send() {
    console.log("sending message");
    sendMsg("Hello, sending... from send()");
  }

  render() {
    return (
      <div className="App">
        <Header>
          <ChatHistory chatHistory={this.state.chatHistory} />
          <button onClick={this.send}>Send</button>
        </Header>
      </div>
    );
  }
   
}

export default App;