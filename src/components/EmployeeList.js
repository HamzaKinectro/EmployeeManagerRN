import React, { Component } from "react";
import { View, Text } from "react-native";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Employee;
