import React, { Component } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { Block, Text, Divider, FundCard } from "../components";
import { theme } from "../constants";

const funds = [
  {
    key: "retirement",
    title: "Retirement",
    amount: 2500,
    progress: 10
  },
  {
    key: "bahamas",
    title: "Bahamas",
    amount: 2500,
    progress: 10
  },
  {
    key: "drivers_license",
    title: "Drivers license",
    amount: 2500,
    progress: 10
  }
];

class Funds extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Text h1 bold>
              Funds
            </Text>
          </Block>
          <Divider />
          <Block padding={15}>
            {funds.map(fund => (
              <TouchableOpacity
                key={fund.key}
                onPress={() => navigation.navigate("NewAccount")}
              >
                <FundCard
                  title={fund.title}
                  progress={fund.progress}
                  amount={fund.amount}
                />
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

export default Funds;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  }
});
