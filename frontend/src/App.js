import './App.css';
import React from 'react';
import { Component } from 'react';
import { connect, sendMsg } from './api';
// import Header from './components/Header/Header';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput';
import Message from './components/Message';
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
      console.log(msg);
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
  send(event) {
    if(event.keyCode === 13){
      sendMsg(event.target.value);
      event.target.value = '';
    }
    console.log("sending message");
    // sendMsg("Hello, sending... from send()");
  }

  // render() { 
  //   console.log(this.props.chatHistory);
  //   // const messages = this.state.chatHistory.map((msg, index) => (
  //   // <p key={index}>{msg.data}</p>
  //   const messages = this.state.chatHistory.map(msg => <Message message={ msg.data}/>);

  //   return (
  //     <div className="ChatHistory">
  //       <Header />
  //       <ChatHistory chatHistory={this.state.chatHistory} />
  //       <ChatInput send={this.send}/>
  //     </div>
  //   );
  // };


    render() {
      return (
          <div className="App">
              <Header />
              <div className="chat-container">
                  <ChatHistory chatHistory={this.state.chatHistory} />
                  <ChatInput send={this.send}/>
              </div>
          </div>
      );
    }
  
  // render() {
  //   return (
  //     <div className="App">
  //       <Header />
  //       <ChatHistory chatHistory={this.state.chatHistory} />
  //       <ChatInput send={this.send}/>
  //     </div>
  //   );
  // }
}

export default App;