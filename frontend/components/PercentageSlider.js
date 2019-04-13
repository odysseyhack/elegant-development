import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Block, Text } from '.';
import { theme } from '../constants';
import Slider from "react-native-slider";


export default class PercentageSlider extends Component {

  render() {

    return (
        <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>{this.props.title}</Text>
              <Slider
                minimumValue={this.props.min-value}
                maximumValue={this.props.max-value}
                step={1}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.props.value}
                onValueChange={this.props.onValueChange}
              />
              <Text caption gray right>{this.props.value}%</Text>
            </Block>  
        </Block>      
    );
  }
}
const styles = StyleSheet.create({
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: theme.colors.secondary,
    },
    sliders: {  
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
})


