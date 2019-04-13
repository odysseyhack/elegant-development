import React, { Component } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { InvestmentCard, Divider, Button, Block, Text } from "../components";
import { theme } from "../constants";

const funds = [
  {
    key: "retirement",
    title: "Retirement",
    atRetirement: true,
    investment: 10
  },
  {
    key: "bahamas",
    title: "Bahamas",
    investment: 80
  },
  {
    key: "drivers_license",
    title: "Drivers license",
    investment: 10
  }
];

const interest_rate = 1.07;
const years_till_retirement = 50;

class Invest extends Component {
  constructor(props) {
    super(props);

    let total = 0;
    const investments = {};

    for (const fund of funds) {
      investments[fund.key] = fund.investment;
      total += fund.investment;
    }

    this.state = {
      investments,
      total,
      investmentAmount: "0"
    };
  }
  onChangeInvestment = investmentAmount => {
    this.setState({ investmentAmount });
  };

  onInvest = () => {
    console.log("invest");
  };

  changeInvestmentPercentage = (key, value) => {
    const investments = {
      ...this.state.investments,
      [key]: value
    };

    const total = Object.values(investments).reduce((prev, amount) => {
      prev += amount;
      return prev;
    }, 0);

    this.setState({
      investments,
      total
    });
  };

  toCurrency = amount => Number(amount).toFixed(2);
  getInvestment = percentage =>
    this.toCurrency((percentage * this.state.investmentAmount) / 100);
  getRetirementValue = value =>
    this.toCurrency(
      ((value * this.state.investmentAmount) / 100) *
        (interest_rate ^ years_till_retirement)
    );

  render() {
    const { total, investmentAmount } = this.state;
    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Text h1 bold>
              Invest
            </Text>
            <Block row space="between" margin={[10, 0, 0, 0]}>
              <TextInput
                style={styles.input}
                onChangeText={val => this.onChangeInvestment(val.substr(1))}
                value={"€" + investmentAmount}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
              />
              <Text small right>
                total: {total}%
              </Text>
            </Block>
          </Block>
          <Divider />

          <Block padding={15} margin={[0, 0, 45, 0]}>
            {funds.map(fund => {
              const investment = this.state.investments[fund.key];
              return (
                <InvestmentCard
                  key={fund.key}
                  investment={this.getInvestment(investment)}
                  title={fund.title}
                  sliderValue={investment}
                  onSliderChange={val =>
                    this.changeInvestmentPercentage(fund.key, val)
                  }
                  atRetirement={
                    fund.atRetirement && this.getRetirementValue(investment)
                  }
                />
              );
            })}
          </Block>
        </ScrollView>

        <Block
          padding={[10, theme.sizes.base * 2]}
          bottom
          flex={0.6}
          margin={[0, 0, 10, 0]}
        >
          <Button disables={true} gradient onPress={this.invest}>
            <Text center semibold white>
              Invest
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

export default Invest;

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
    marginBottom: 10,
    width: 100,
    fontSize: theme.fonts.h1.fontSize,
    flex: 1
  },
  elementsContainer: {
    flex: 1,
    marginTop: 10
  }
});
