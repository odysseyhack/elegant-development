import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SavingsGoal, Divider, Button, Block, Text } from '../components';
import { theme } from '../constants';

class Invest extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Text h1 bold style={marginBottom = 30}>Invest</Text>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2>Budget</Text>
                <Text>Specify Investment</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
          </Block>
          <Divider />

          <SavingsGoal></SavingsGoal>
          <SavingsGoal></SavingsGoal>
          <SavingsGoal></SavingsGoal>

        </ScrollView>

        <Block padding={[10, theme.sizes.base * 2]} bottom flex={0.6}>
          <Button gradient onPress={() => navigation.navigate('Welcome')}>
            <Text center semibold white>Invest</Text>
          </Button>
        </Block>
      </Block>
    )
  }
}

export default Invest;


const styles = StyleSheet.create({

  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end'
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
  }
})

