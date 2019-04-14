import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Block, FirePoints, Text } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';

export default class RetireEarly extends Component {

  render() {
    return (
        <Card color="white" space="between" shadow>
            <TouchableOpacity onPress={this.props.onPress}>
                <Block center>
                    <FirePoints points={this.props.points}/>
                </Block>
                <Block center margin={[20, 10, 10, 0]}>
                    <Icon name="md-lock" size={42}  /> 
                    <Text> Retire early</Text>   
                </Block>
            </TouchableOpacity>
        </Card>
    )
  }
}