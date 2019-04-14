import React, { Component } from "react";
import { Progress, Block, Text } from "../components";
import { StyleSheet } from "react-native";
import { theme } from "../constants";

export default class FundCard extends Component {
  render() {
    const { title, amount, progress } = this.props;

    return (
      <Block color="white" space="between" shadow style={styles.card}>
        <Block margin={[0, 0, 10, 0]}>
          <Text title>{title}</Text>
          <Text gray2>€{amount}</Text>
        </Block>
        <Block>
          <Progress value={progress} />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  }
});
