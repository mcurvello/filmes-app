import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Filmes extends Component {
  render() {
    const { nome } = this.props.data;
    return (
      <View>
        <Text>{nome}</Text>
      </View>
    );
  }
}

export default Filmes;
