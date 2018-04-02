import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Alert,
  Keyboard
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 22,
    textAlign: "center",
    color:'#303030',
    marginBottom:10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 2,
    fontSize: 18,
    color:'#303030'

  }
});

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { loading: false, username: "" };
  }
  startChatting = () => {
    if(this.state.username=='')
    {
      Alert.alert("Invalid Login" , "Please Enter your name first");
      return;
    }
    this.setState({ loading: true });
    Keyboard.dismiss(0);
    this.props.navigation.navigate('Chat' , {username : this.state.username});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#075e54" barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to Chat App</Text>
        <Text style={styles.instructions}>
          To get started, enter your name then start !
        </Text>
        <TextInput
          style={{ height: 50, alignSelf: "stretch", margin: 30 , marginTop:10 }}
          placeholder="Enter your name here !"
          onChangeText={username => this.setState({ username })}
        />
        <Button
          onPress={this.startChatting}
          title="Start Chatting"
          color="#075e54"
        />
        {this.state.loading && (
          <ActivityIndicator size="large" style={{ marginTop: 40 }}  />
        )}
      </View>
    );
  }
}

export default Home;
