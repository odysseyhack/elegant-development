import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block } from "../components";
import { theme } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";

export default class AddAccountButton extends Component {
  render() {
    return (
      <Block style={styles.card} middle center shadow color="white">
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon name="ios-add" color={theme.colors.secondary} size={74} />
        </TouchableOpacity>
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: theme.colors.secondary
  }
});
