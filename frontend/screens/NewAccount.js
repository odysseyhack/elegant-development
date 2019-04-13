import React, {Component} from 'react'
import {Image, StyleSheet, ScrollView, TextInput, Alert, Keyboard} from 'react-native'
import {Divider, Button, Block, Text, Switch} from '../components';
import {theme, mocks} from '../constants';
import FundsStatus from "../components/FundsStatus";
import EditField from "../components/EditField";

class NewAccount extends Component {
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
    handleSave() {
        const {navigation} = this.props;
        const {name, dateofbirth, password} = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({loading: true});

        // check with backend API or with some static data
        if (!name) errors.push('name');
        if (!dateofbirth) errors.push('dateofbirth');

        this.setState({errors, loading: false});

        if (!errors.length) {
            Alert.alert(
                'Success!',
                'Your changes have been saved',
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

    render = () => {
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>New Account</Text>
                </Block>
                <FundsStatus currentAmount={261} goalAmount={1450}/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]}/>
                    <Block style={styles.inputs}>

                        <EditField name={"label"} default_value={"Give your account a name"}/>
                        <EditField name={"target date"} default_value={"Specify target date"}/>
                        <EditField name={"target"} default_value={"Set target amount"}/>
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
    }
})
