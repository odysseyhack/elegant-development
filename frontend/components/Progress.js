import React, { Component } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Block from "./Block";

class Progress extends Component {
  render() {
    const {
      startColor,
      endColor,
      value,
      opacity,
      style,
      ...props
    } = this.props;

    return (
      <Block
        row
        center
        shadow
        style={[styles.background, styles]}
        {...props}
      >
        <LinearGradient
          end={{ x: 1, y: 0 }}
          colors={[startColor, endColor]}
          style={[styles.overlay, { flex: value }]}
        >
          <LinearGradient
            end={{ x: 1, y: 0 }}
            colors={[startColor, endColor]}
            style={[styles.active, { flex: value }]}
          />
        </LinearGradient>
      </Block>
    );
  }
}

Progress.defaultProps = {
  startColor: "#4F8DFD",
  endColor: "#3FE4D4",
  value: 0.75,
  opacity: 1
};

export default Progress;

const styles = StyleSheet.create({
  background: {
    height: 12,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: "#E1E1E1"
  },
  overlay: {
    height: "100%",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  active: {
    marginTop: 4,
    height: 6,
    maxHeight: 6,
    borderRadius: 7
  }
});
