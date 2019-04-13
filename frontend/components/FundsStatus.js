import React, {Component} from 'react'
import { StyleSheet } from "react-native";
import {CircularProgress} from 'react-native-circular-progress';
import {theme} from "../constants";
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
            fill=currentAmount/goalAmount*100,
        } = this.props;

        return (
            <Block flex={false} row center space="between" style={styles.header}>
                <CircularProgress

                    size={175}
                    fill={fill}
                    lineCap="butt"
                    rotation={0}
                    width={theme.sizes.base}
                    tintColor={theme.colors.primary}
                    backgroundColor={theme.colors.bar1}
                    backgroundWidth={theme.sizes.base}
                >
                    {() => (
                        <Block center middle>
                            <Text h1>&euro;{currentAmount}</Text>
                            <Text h3>/&euro;{goalAmount}</Text>
                        </Block>
                    )}

                </CircularProgress>
            </Block>

        )
    }
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base *7,
        paddingTop: theme.sizes.base * 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
});