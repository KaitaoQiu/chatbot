// import React, { Component } from "react";
// import "./ChatHistory.scss";

// class ChatHistory extends Component {
//   render() {
//     const messages = this.props.chatHistory.map((msg, index) => (
//       <p key={index}>{msg.data}</p>
//     ));

//     return (
//       <div className="ChatHistory">
//         <h2>Chat History</h2>
//         {messages}
//       </div>
//     );
//   }
// }

// export default ChatHistory;

import React from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

const ChatHistory = ({ chatHistory }) => {
    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            <div className="messages-container">
                {chatHistory.map((msg, index) => (
                    <Message 
                        key={index} 
                        message={msg.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatHistory;