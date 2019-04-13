
import React, {Component} from 'react'
import { StyleSheet, Text } from "react-native";
import {CircularProgress} from 'react-native-circular-progress';
import {theme} from "../constants";
import {Block ,Text} from "./"


export default class FundsStatus extends Component {

    render() {
        const {
            currentAmount,
            goalAmount
        } = this.props;

        return (
            <Block flex={false} row center space="between">
                <CircularProgress

                    size={214}
                    fill={75}
                    lineCap="butt"
                    rotation={0}
                    width={theme.sizes.base}
                    tintColor={theme.colors.primary}
                    backgroundColor={theme.colors.bar1}
                    backgroundWidth={theme.sizes.base / 2}
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
// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: theme.colors.black,
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 10
//     }
// });