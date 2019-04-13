import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Divider, Block, Text, IconCard } from "../components";
import { theme } from "../constants";

import flowers from "../assets/icons/flowers.png";

class Achievements extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block>
          <Block flex={false} row center space="between" style={styles.header}>
            <Text h1 bold>
              Achievements
            </Text>
          </Block>
          <Block flex={false} row space="between" style={styles.categories}>
            <IconCard title={"category"} locked={false} image={flowers} />
            <IconCard title={"category"} locked={false} image={flowers} />
            <IconCard title={"category"} locked={false} image={flowers} />
            <IconCard title={"category"} locked={false} image={flowers} />
            <IconCard title={"category"} locked={false} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
            <IconCard title={"category"} locked={true} image={flowers} />
          </Block>
        </Block>
        <Divider />
      </ScrollView>
    );
  }
}

export default Achievements;

const styles = StyleSheet.create({
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  },
  elementsContainer: {
    flex: 1,
    marginTop: 10
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  }
});
