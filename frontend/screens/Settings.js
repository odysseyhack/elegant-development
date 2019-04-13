import React, {Component} from 'react'
import {Image, StyleSheet, ScrollView, TextInput} from 'react-native'
import {Divider, Button, Block, Text, Switch} from '../components';
import {theme, mocks} from '../constants';
import FundsStatus from "../components/FundsStatus";

class Settings extends Component {
    state = {
        budget: 850,
        monthly: 1700,
        withdrawMoney: false,
        changeTargetDate: true,
        changebudgetpercentage: true,
        editing: null,
        account: {},
    }


    componentDidMount() {
        this.setState({account: this.props.account});
    }

    handleEdit(name, text) {
        const {account} = this.state;
        account[name] = text;

        this.setState({account: account});
    }

    toggleEdit(name) {
        const {editing} = this.state;
        this.setState({editing: !editing ? name : null});
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    renderEdit(name) {
        const {account, editing} = this.state;

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={name}
                    onChangeText={text => this.handleEdit([name], text)}

                />
            )
        }

        return <Text bold>{"Please enter the " + this.Capitalize(name)}</Text>
    }

    render = () => {

        const {account, editing} = this.state;

        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>New Account</Text>
                </Block>
                <FundsStatus currentAmount={50} goalAmount={1450}/>
                <Block center>
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]}/>
                    <Block style={styles.inputs}>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom: 10}}>Label</Text>
                                {this.renderEdit('label')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('label')}>
                                {editing === 'label' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom: 10}}>Target</Text>
                                {this.renderEdit('target')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('target')}>
                                {editing === 'target' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom: 10}}>Budget</Text>
                                {this.renderEdit('budget')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('budget')}>
                                {editing === 'budget' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom: 10}}>Monthly Cap</Text>
                                {this.renderEdit('monthlyCap')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('monthlyCap')}>
                                {editing === 'monthlyCap' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{marginBottom: 10}}>Target date</Text>
                                {this.renderEdit('targetDate')}
                            </Block>
                            <Text medium secondary onPress={() => this.toggleEdit('targetDate')}>
                                {editing === 'targetDate' ? 'Save' : 'Edit'}
                            </Text>
                        </Block>
                    </Block>
                    <Divider/>
                    <Block style={styles.toggles}>
                        <Block row center space="between" style={{marginBottom: theme.sizes.base * 2}}>
                            <Text gray2>Withdraw money</Text>
                            <Switch
                                value={this.state.withdrawMoney}
                                onValueChange={value => this.setState({withdrawMoney: value})}
                            />
                        </Block>

                        <Block row center space="between" style={{marginBottom: theme.sizes.base * 2}}>
                            <Text gray2>Change target date</Text>
                            <Switch
                                value={this.state.changeTargetDate}
                                onValueChange={value => this.setState({changeTargetDate: value})}
                            />
                        </Block>

                        <Block row center space="between" style={{marginBottom: theme.sizes.base * 2}}>
                            <Text gray2>Change budget percentage</Text>
                            <Switch
                                value={this.state.changebudgetpercentage}
                                onValueChange={value => this.setState({changebudgetpercentage: value})}
                            />
                        </Block>
                    </Block>

                </ScrollView>
            </Block>
        )
    }
}

export default Settings;

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
    }
})
