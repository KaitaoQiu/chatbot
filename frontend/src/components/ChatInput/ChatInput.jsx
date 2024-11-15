import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component{
    render(){
        return(
            <div className="ChatInput">
                <input type="text" placeholder="Type a message..." onKeyDown={this.props.send} />
                <button>Send</button>
            </div>
        );
    }
}

export default ChatInput;