import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {theme} from "../constants";
import Block from "./Block";
import Text from "./Text";
import Button from "./Button";
import PointGainBadge from "./PointGainBadge";

export default class AdviceCard extends Component {

    render() {
        const { label="Bahamas", atRetirement = 10292, invenstment=400} = this.props;

        return (
            <Block color="#fdfdfd" shadow style={styles.card}>
                <Block gray2 margin={[0, 0, 10, 0]}>
                    <Text h1 gray2>
                        <Text h1 black>&euro;{invenstment} </Text>
                        {label } gets you
                        <Text h1 black> &euro;{invenstment} </Text>
                        now or
                        <Text h1 black> &euro;{atRetirement} </Text>
                        at retirement
                    </Text>
                </Block>
                <Block style={styles.container}>
                    <Button
                        padding={[10, theme.sizes.base * 2]}
                        margin={[0, 0, 10, 0]}
                        style={styles.button}
                        disables={true}
                        white
                        onPress={this.ignore}>
                        <Text center semibold black>
                            Keep
                        </Text>
                    </Button>
                    <Button
                        padding={[20, theme.sizes.base * 3]}
                        margin={[0, 0, 10, 0]}
                        style={styles.button}
                        disables={true}
                        gradient
                        onPress={this.takeAdvice}>
                        <Text center semibold white>
                            Switch
                        </Text>
                    </Button>
                    <PointGainBadge points={2}/>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        textAlign: 'right',
        borderRadius: theme.sizes.radius,
        padding: theme.sizes.base + 4,
        marginBottom: theme.sizes.base
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
        height:40,
    }
});
