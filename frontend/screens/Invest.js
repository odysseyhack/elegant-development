import React, { Component } from "react";
import { StyleSheet, ScrollView, TextInput, AsyncStorage } from "react-native";
import {
  InvestmentCard,
  Divider,
  Button,
  Block,
  Text,
  AdviceCard
} from "../components";
import { theme } from "../constants";

const interest_rate = 1.07;

class Invest extends Component {
  constructor(props) {
    super(props);

    const funds = this.props.navigation.getParam("funds");

    let total = 0;
    const investments = {};

    for (const fund of funds) {
      investments[fund.key] = fund.investment;
      total += fund.investment;
    }

    this.state = {
      investments,
      total,
      investmentAmount: "0",
      yearsTillRetirement: 1
    };
  }
  onChangeInvestment = investmentAmount => {
    this.setState({ investmentAmount });
  };

  async componentDidMount() {
    const dateOfBirth = JSON.parse(await AsyncStorage.getItem("dateOfBirth"));
    const retirementAge = new Date(dateOfBirth);
    retirementAge.setFullYear(retirementAge.getFullYear() + 68);
    const yearsTillRetirement =
      retirementAge.getFullYear() - new Date().getFullYear();
    this.setState({
      yearsTillRetirement
    });
  }

  onInvest = () => {
    if (this.state.total !== 100) return;
    const funds = this.props.navigation.getParam("funds");
    const changeFunds = this.props.navigation.getParam("changeFunds");
    const { investments, investmentAmount } = this.state;

    for (const fund of funds) {
      fund.amount += (investments[fund.key] * investmentAmount) / 100;
    }
    changeFunds(funds);
    this.props.navigation.goBack();
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
        (interest_rate ^ this.state.yearsTillRetirement)
    );

  render() {
    const { total, investmentAmount } = this.state;
    const funds = this.props.navigation.getParam("funds");
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
                  title={fund.label}
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

            {investmentAmount !== "0" && investmentAmount !== "" && (
              <AdviceCard
                label={funds[1].label}
                atRetirement={this.getRetirementValue(funds[1].investment)}
                investment={this.getInvestment(funds[1].investment)}
                onSwitch={this.onInvest}
                onKeep={this.onInvest}
              />
            )}
          </Block>
        </ScrollView>

        {/* <Block
          padding={[10, theme.sizes.base * 2]}
          bottom
          flex={0.6}
          margin={[0, 0, 10, 0]}
        >
          <Button disables={true} gradient onPress={this.onInvest}>
            <Text center semibold white>
              Invest
            </Text>
          </Button>
        </Block> */}
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
