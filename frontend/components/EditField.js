import React, {Component} from 'react'
import {StyleSheet, TextInput} from "react-native";
import {theme} from "../constants";
import Block from './Block';
import Text from './Text';

export default class EditField extends Component {
    state = {
        editing: null,
        account: {},
    };
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    renderEdit(name, default_value) {
        const {account, editing} = this.state;

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={name}
                    onChangeText={text => this.handleEdit([name], text)}

                />
            )
        }

        return <Text bold>{default_value}</Text>
    }

    handleEdit(name, text) {
        const {account} = this.state;
        account[name] = text;

        this.setState({account: account});
    }

    render() {
        const {account, editing} = this.state;
        const {name, default_value} = this.props;

        return (
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                <Block>
                    <Text gray2 style={{marginBottom: 10}}>{this.Capitalize(name)}</Text>
                    {this.renderEdit(name, default_value)}
                </Block>
                <Text medium secondary onPress={() => this.toggleEdit(name)}>
                    {editing === name ? 'Save' : 'Edit'}
                </Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
    },
    inputRow: {
        alignItems: 'flex-end'
    },
});