import React, { Component } from 'react';
import { Block, Text } from '.';
import { View, StyleSheet} from 'react-native'
import { theme } from '../constants';

export default class SavingsGoal extends Component {
  render() {
    return (
        <Block padding={[0, theme.sizes.base * 2]} >
            <Text gray2> 12%  <Text>   Pension</Text></Text>      
            <View style={[{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-start'}, styles.elementsContainer]}>
                <View><Text h3> € 12.000 </Text></View> 
                <View><Text h3>  / </Text></View> 
                <View><Text h3> € 688.000</Text></View> 
            </View>   
        </Block>
    );
  }
}
const styles = StyleSheet.create({
  elementsContainer: {
    flex: 1,
    marginTop: 10
  }
})
