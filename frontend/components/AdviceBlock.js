import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { Text, Card } from "../components";
import { theme } from "../constants";

export default class AdviceBlock extends Component {
  render() {
    return (
      <Block flex={false} middle center>
        <Text>{this.props.advice}</Text>
        <Text style={styles.advice}>{this.props.adviceAmount}</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  advice: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
