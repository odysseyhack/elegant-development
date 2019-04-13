import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Slider from 'react-native-slider'

import { Block, Text } from './';
import { theme } from '../constants';

export default class InvestmentCard extends Component {
  render() {
    const { style, investment, title, sliderValue, sliderMax = 100, sliderMin = 0, onSliderChange, atRetirement, ...props } = this.props;
    const cardStyles = [
      styles.card,
      style,
    ];

    return (
      <Block shadow color={theme.colors.white} style={cardStyles} {...props}>
        <Block row space="between" style={styles.title}><Text h2>€ {investment}</Text><Text h2>{title}</Text></Block>
        <Block margin={[10, 0]}>
          <Slider
            minimumValue={sliderMin}
            maximumValue={sliderMax}
            style={{ height: 19 }}
            thumbStyle={styles.thumb}
            trackStyle={{ height: 6, borderRadius: 6 }}
            minimumTrackTintColor={theme.colors.secondary}
            maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
            value={sliderValue}
            onValueChange={onSliderChange}
            step={1}
          />
          <Text caption gray right>{sliderValue}%</Text>
          {atRetirement && <Text small >≈ €{atRetirement} at retirement</Text>}
        </Block>
      </Block>
    )
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base,
    marginBottom: theme.sizes.base,
  },
  title: {
    marginBottom: 20
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
})
