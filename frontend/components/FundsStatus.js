import React, { Component } from 'react'
import { StyleSheet, View } from "react-native";
import { CircularProgress } from 'react-native-circular-progress';
import { theme } from "../constants";
import Block from './Block';
import Text from './Text';

/**
 * TLDR: paste this to where ever you want.
 * <FundsStatus currentAmount={number} goalAmount={number}/>
 */
export default class FundsStatus extends Component {

    render() {
        const {
            currentAmount,
            goalAmount,
            fill = currentAmount / goalAmount * 100,
        } = this.props;

        return (
            <Block center style={styles.container}>
                <CircularProgress
                    style={styles.circular}
                    size={175}
                    fill={fill}
                    rotation={0}
                    lineCap="round"
                    width={theme.sizes.base}
                    tintColor={theme.colors.primary}
                    backgroundColor='#E5E7E6'
                    backgroundWidth={theme.sizes.base}
                >
                    {() => (
                        <Block center middle>
                            <Text h1>&euro;{currentAmount}</Text>
                            <Text grey2 h3>/&euro;{goalAmount}</Text>
                        </Block>
                    )}

                </CircularProgress>
            </Block>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: theme.sizes.base,
    },
    circular: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 7,
        backgroundColor: theme.colors.white,
        borderRadius: 175 / 2,
    },

});