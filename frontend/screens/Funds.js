import React, { Component } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import {
  Block,
  Text,
  Divider,
  FundCard,
  AddAccountButton
} from "../components";
import { theme } from "../constants";

class Funds extends Component {
  state = {
    funds: [
      {
        key: "retirement",
        label: "Retirement",
        amount: 9000,
        target: 100000,
        currentSpendable: 900,
        desiredSpendable: 1000,
        adviceAmount: 1200,
        targetDate: new Date()
      },
      {
        key: "bahamas",
        label: "Bahamas",
        amount: 9000,
        target: 100000,
        targetDate: new Date()
      },
      {
        key: "drivers_license",
        label: "Drivers license",
        amount: 9000,
        target: 100000,
        targetDate: new Date()
      }
    ]
  };

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
            {this.state.funds.map((fund, index) => (
              <TouchableOpacity
                key={fund.key}
                onPress={() => {
                  if (fund.currentSpendable) {
                    navigation.navigate("Pension", {
                      fund
                    });
                  } else {
                    navigation.navigate("ViewAccount", {
                      onDateChange: date => {
                        const fund = {
                          ...this.state.funds[index],
                          targetDate: date
                        };

                        const funds = [...this.state.funds];
                        funds[index] = fund;

                        this.setState({
                          funds
                        });
                      },
                      fund
                    });
                  }
                }}
              >
                <FundCard
                  title={fund.label}
                  progress={fund.amount / fund.target || 0}
                  amount={fund.amount}
                />
              </TouchableOpacity>
            ))}
            <AddAccountButton
              onPress={() =>
                navigation.navigate("NewAccount", {
                  saveAccount: ({ label, target, targetDate }) => {
                    const fund = {
                      label,
                      target,
                      targetDate,
                      amount: 0,
                      key: label
                    };

                    this.setState({
                      funds: [...this.state.funds, fund]
                    });
                  }
                })
              }
            />
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
