import React, { Component } from "react";
import "./Message.scss";

// class Message extends Component {
//     constructor(props) {
//         super(props);
//         let temp = JSON.parse(this.props.message);
//         this.state = {
//             message: temp,
//         };
//     }
//     render() {
//         return <div className="Message">{this.state.message.body}</div>;
//     }
// }

// export default Message;

const Message = ({ message }) => {
    const parsedMessage = (() => {
        try {
            return JSON.parse(message);
        } catch (e) {
            return { body: message };
        }
    })();

    return (
        <div className="Message-container">
            <div className="Message">
                {parsedMessage.body}
            </div>
        </div>
    );
}

export default Message;