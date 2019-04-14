import React, { Component } from "react";

import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Card, Badge, Text } from "../components";

import { theme } from "../constants";

export default class IconCard extends Component {
  render() {
    return (
      <Card center middle shadow style={styles.category}>
        <Badge margin={[0, 0, 0]} size={50}>
          {this.props.locked ? (
            <Image source={this.props.image} style={{ opacity: 0.85 }} />
          ) : (
            <Image source={this.props.image} />
          )}
        </Badge>
        <Text medium height={20}>
          {this.props.title}
        </Text>
        <Text gray caption>
          {this.props.subtitle}
        </Text>
      </Card>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  }
});
