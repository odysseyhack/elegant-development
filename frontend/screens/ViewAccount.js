import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { Divider, Block, Text, FundsStatus, Button, EditField } from '../components';
import { theme } from '../constants';

class NewAccount extends Component {
    state = {
        loading: false,
        account: {
            label: 'Drivers license',
            target: 1450,
            targetDate: 'June 25, 2019',
            currentAmount:261
        },
    }

    handleEdit = (name, text) => {
        const { account } = this.state;
        account[name] = text;

        this.setState({ account });
    }

    render = () => {

        const { account } = this.state;

        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>{account.label}</Text>
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FundsStatus currentAmount={account.currentAmount} goalAmount={account.target} />

                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block style={styles.inputs}>
                        <EditField label="Target Date" value={account.targetDate} onChangeText={val => this.handleEdit('targetDate', val)} />
                    </Block>
                </ScrollView>
            </Block>
        )
    }
}

export default NewAccount;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
    },
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
    inputRow: {
        alignItems: 'flex-end'
    },
    sliders: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: theme.colors.secondary,
    },
    toggles: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: theme.sizes.base * 2
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    }
})