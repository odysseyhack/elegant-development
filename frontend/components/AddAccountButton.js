import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Block, Text } from '../components';
import { theme } from '../constants';
import Icon from 'react-native-ionicons'

export default class AddAccountButton extends Component {

  render() {
    return (
      <Block>
        <Card style={[flex=1, styles.card]}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon style={styles.icon} name="add" size={74}  />
          </TouchableOpacity>
        </Card>
      </Block>
    )
  }
}

export const styles = StyleSheet.create({
  card: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: theme.colors.secondary, 
    justifyContent: 'center'
  },
  icon: {
    color: theme.colors.secondary,
    alignSelf: 'center',
  }
})