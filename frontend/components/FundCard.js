import React, { Component } from 'react';
import { Progress, Block, Text } from '../components';
import { StyleSheet } from 'react-native'

export default class FundCard extends Component {

  render() {

       return (
        <Block shadow margin={10} flex={false} style={styles.background}>
                <Block ><Text title>{this.props.title}  </Text></Block>  
                <Block><Text gray2>€{this.props.amount} </Text></Block>  
                <Block>
                    <Progress value={this.props.progress} />
                </Block>               
        </Block>
       )
    }
}

const styles = StyleSheet.create({
    background: {
        height: 122
    },

    progressbar: {
        paddingTop: 15
    }
})
