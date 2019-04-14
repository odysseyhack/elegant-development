import React, { Component } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Block from "./Block";
import { theme } from "../constants";

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
      <Block row center shadow style={[styles.background, styles]} {...props}>
        <LinearGradient
          end={{ x: 1, y: 0 }}
          colors={[startColor, endColor]}
          style={[styles.overlay, { flex: 0.5 }]}
        >
          <LinearGradient
            end={{ x: 1, y: 0 }}
            colors={[startColor, endColor]}
            style={[styles.active, { flex: 0.5 }]}
          />
        </LinearGradient>
      </Block>
    );
  }
}

Progress.defaultProps = {
  startColor: theme.colors.secondary,
  endColor: theme.colors.primary,
  opacity: 1
};

export default Progress;

const styles = StyleSheet.create({
  background: {
    height: 18,
    borderRadius: 18,
    backgroundColor: "#E1E1E1"
  },
  overlay: {
    height: 18,
    borderRadius: 18
  }
});
