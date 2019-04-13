import React, {Component} from 'react'
import {StyleSheet, TextInput} from "react-native";
import {theme} from "../constants";
import Block from './Block';
import Text from './Text';

export default class EditField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: null,
            new_value: '',
        };
    }


    handleEdit(name, text) {
        new_value = text;

        this.setState({new_value});
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    toggleEdit(name) {
        const {editing} = this.state;
        this.setState({editing: !editing ? name : null});
    }

    renderEdit(name, default_value) {
        const {new_value, editing} = this.state;

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={new_value}
                    onChangeText={text => this.handleEdit([name], text)}

                />
            )
        }

        return <Text bold>{!new_value ? default_value : new_value}</Text>
    }


    render() {
        const {editing} = this.state;
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