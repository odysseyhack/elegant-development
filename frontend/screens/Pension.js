import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Divider,
  Block,
  Text,
  IconCard,
  AdviceBlock,
  Card,
  Button
} from "../components";
import { theme } from "../constants";

// money hight
import moneyLow from "../assets/icons/moneyLow.png";
// money low
import moneyHigh from "../assets/icons/moneyHigh.png";

class Pension extends Component {
  handleSave = () => {
    const { navigation } = this.props;
    // saves budget

    // Navigates to home
    navigation.navigate("Browse");
  };

  render() {
    currentSpendable = "1.512";
    desiredSpendable = "2.200";
    adviceAmount = "1.460";

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Explore
          </Text>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={false} row space="between" style={styles.categories}>
            <IconCard
              title={`$${currentSpendable} p.m.`}
              locked={false}
              image={moneyLow}
              subtitle={"Current spendable \n income"}
            />
            <IconCard
              title={`$${desiredSpendable} p.m.`}
              locked={false}
              image={moneyHigh}
              subtitle={"Desired spendable \n income"}
            />
          </Block>
          <Divider />
          <Block flex={false} row space="between" style={styles.categories}>
            <Card center middle shadow>
              <AdviceBlock
                advice={`To reach your desired spending income of $${desiredSpendable} p.m. we advice you to budget in an amount every month. This amount can change based on previous investments.`}
                adviceAmount={`$${adviceAmount} p.m.`}
              />
            </Card>
          </Block>
        </ScrollView>

        <Block center style={styles.footer}>
          <Button
            gradient
            style={styles.button}
            onPress={() => this.handleSave()}
          >
            <Text bold white center>
              Save
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

export default Pension;

const styles = StyleSheet.create({
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2
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
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.sizes.base * 2
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  }
});
