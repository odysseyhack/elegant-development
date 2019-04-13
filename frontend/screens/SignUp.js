import React, {Component} from 'react';
import {
    Alert,
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Linking,
} from 'react-native';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../constants';

export default class SignUp extends Component {
    state = {
        name: null,
        dateofbirth: null,
        errors: [],
        loading: false,
    };

    static navigationOptions = {
        headerRight: null
    }

    handleSignUp() {
        const {navigation} = this.props;
        const {name, dateofbirth, password} = this.state;
        const errors = [];

        navigation.navigate('Invest')

        Keyboard.dismiss();
        this.setState({loading: true});

        // check with backend API or with some static data
        if (!name) errors.push('name');
        if (!dateofbirth) errors.push('dateofbirth');

        this.setState({errors, loading: false});

        if (!errors.length) {
            Alert.alert(
                'Success!',
                'Your account has been created',
                [
                    {
                        text: 'Continue',
                        onPress: () => {
                            navigation.navigate('Browse');
                        },
                    },
                ],
                {cancelable: false}
            );
        }
    }

    render() {
        const {navigation} = this.props;
        const {loading, errors} = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

        return (
            <KeyboardAvoidingView style={styles.signup} behavior="padding" enabled={false}>
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold style={styles.header}>
                        Register
                    </Text>
                    <Input
                        name
                        label="Name"
                        error={hasErrors('name')}
                        style={[styles.input, hasErrors('name')]}
                        defaultValue="Specify name"
                        onChangeText={text => this.setState({name: text})}
                    />

                    <Input
                        label="Date of Birth"
                        error={hasErrors('dateofbirth')}
                        style={[styles.input, hasErrors('dateofbirth')]}
                        defaultValue="Specify date of birth"
                        onChangeText={text => this.setState({dateofbirth: text})}
                    />
                    <Button gradient onPress={() => this.handleSignUp()}>
                        {loading ? (
                            <ActivityIndicator size="small" color="white"/>
                        ) : (
                            <Text bold white center>
                                Register
                            </Text>
                        )}
                    </Button>

                    <Block center bottom>
                        <Text caption center style={{color: "gray", margin: 0}}>
                            Icons made by
                        </Text>
                        <Text center style={styles.links} onPress={() => {
                            Linking.openURL('https://www.freepik.com/');
                        }}>
                            https://www.freepik.com/
                        </Text>

                        <Text center style={styles.links} onPress={() => {
                            Linking.openURL('https://fontawesome.com/license');
                        }}>
                            https://fontawesome.com/license
                        </Text>

                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent,
    },
    links: {
        color: 'green',
        textDecorationLine: 'underline',
    },
    header: {
        marginBottom:20,

},
});
