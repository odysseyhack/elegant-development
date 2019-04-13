import React, { Component } from 'react'
import { StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import { Divider, Block, Text, FundsStatus, Button } from '../components';
import { theme } from '../constants';

class NewAccount extends Component {
    state = {
        editing: null,
        loading: false,
        account: {
            label: '',
            target: '',
            targetDate: ''
        }
    }

    handleEdit(name, text) {
        const { account } = this.state;
        account[name] = text;

        this.setState({ account });
    }

    toggleEdit(name) {
        const { editing } = this.state;
        this.setState({ editing: !editing ? name : null });
    }

    renderEdit(name) {
        const { account, editing } = this.state;

        if (editing === name) {
            return (
                <TextInput
                    value={account[name]}
                    onChangeText={text => this.handleEdit([name], text)}
                />
            )
        }

        return <Text bold>{account[name]}</Text>
    }

    onSave = () => {
        const { label, target, targetDate } = this.state.account;

        this.setState({ loading: true })
        if (label !== "" && target !== "" && targetDate !== "") {
            // Create new Account
        } else {
            // TODO: handle error
            this.setState({ loading: false })
        }
    }

    renderFooter() {
        const { loading } = this.state;

        return (
            <Block center style={styles.footer}>
                <Button onPress={() => this.onSave()} gradient style={styles.button}>
                    {loading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                            <Text bold white center>
                                Save
                            </Text>
                        )}
                </Button>
            </Block>
        );
    }

    render = () => {

        const { editing } = this.state;

        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>New Account</Text>
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FundsStatus currentAmount={50} goalAmount={1450} />

                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block style={styles.inputs}>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>Label</Text>
                                {this.renderEdit('label')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('label')}>
                                {editing === 'label' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>Target</Text>
                                {this.renderEdit('target')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('target')}>
                                {editing === 'target' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>Target date</Text>
                                {this.renderEdit('targetDate')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('targetDate')}>
                                {editing === 'targetDate' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                    </Block>
                </ScrollView>
                {this.renderFooter()}
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
