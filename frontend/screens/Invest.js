import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { PercentageSlider, Block, Text } from '../components';
import { theme } from '../constants';

class Invest extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PercentageSlider />
        </ScrollView>
      </Block>
    )
  }
}

export default Invest;


const styles = StyleSheet.create({
})

