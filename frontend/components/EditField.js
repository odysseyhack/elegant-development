import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { theme } from "../constants";
import Block from "./Block";
import Text from "./Text";

export default class EditField extends Component {
  state = {
    isEditing: false
  };

  static getDerivedStateFromProps = (props, state) => {
    if (props.isEditing != undefined) {
      return {
        ...state,
        isEditing: props.isEditing
      };
    }
    return state;
  };

  toggleEdit = () => this.setState({ isEditing: !this.state.isEditing });

  onEdit = () => {
    if (this.props.onEdit && !this.state.isEditing) {
      this.props.onEdit();
    }
    this.toggleEdit();
  };

  render() {
    const { isEditing } = this.state;
    const { label, onChangeText, value, inputType = "default" } = this.props;

    return (
      <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
        <Block>
          <Text gray2 style={{ marginBottom: 10 }}>
            {label}
          </Text>
          {isEditing ? (
            <TextInput
              value={value}
              onChangeText={onChangeText}
              keyboardType={inputType}
            />
          ) : (
            <Text bold>{value}</Text>
          )}
        </Block>
        <Text medium secondary onPress={this.onEdit}>
          {isEditing ? "Save" : "Edit"}
        </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  }
});
