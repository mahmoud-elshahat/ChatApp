import React, { Component } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Firebase from "../Firebase";

class Chat extends Component<Props> {
  state = {
    messages: []
  };
  componentWillMount() {}

  render() {
    return (
      
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          Firebase.sendMessage(message);
        }}
        user={{
          _id: Firebase.getUid(),
          name: this.props.navigation.state.params.username
        }}
      />

    );
  }
  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];
    Firebase.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        };
      });
    });
  }

  componentWillUnmount() {
    Firebase.closeChat();
  }
}

export default Chat;
