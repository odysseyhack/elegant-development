import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Linking,
  AsyncStorage
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends Component {
  state = {
    name: "",
    dateofbirth: new Date(),
    errors: [],
    loading: false,
    isDateTimePickerVisible: false
  };

  static navigationOptions = {
    headerRight: null
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = date => {
    this.setState({
      dateofbirth: date
    });
    this.hideDateTimePicker();
  };

  async handleSignUp() {
    const { navigation } = this.props;
    const { name, dateofbirth } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!name) errors.push("name");
    if (!dateofbirth) errors.push("dateofbirth");
    if (errors.length) {
      this.setState({ errors, loading: false });
      return;
    }
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("dateOfBirth", JSON.stringify(dateofbirth));
    this.setState({ loading: false, errors: [] });
    // DRIZZLE PARTICIPATE
    // save date of birth

    navigation.navigate("Funds");
  }

  render() {
    const { loading, errors, name, dateofbirth } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView
        style={styles.signup}
        behavior="padding"
        enabled={false}
      >
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold style={styles.header}>
            Participate
          </Text>
          <Input
            label="Name"
            value={name}
            error={hasErrors("name")}
            style={[styles.input, hasErrors("name")]}
            onChangeText={text => this.setState({ name: text })}
          />
          <Block>
            <Block flex={false} margin={[0, 0, 10, 0]}>
              <Text gray2>Date of Birth</Text>
            </Block>
            <Text h3 onPress={this.showDateTimePicker}>
              {dateofbirth.toString().slice(0, 15)}
            </Text>
          </Block>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Button gradient onPress={async () => await this.handleSignUp()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Participate
              </Text>
            )}
          </Button>

          <Block center bottom margin={[0, 0, 30, 0]}>
            <Text caption center style={{ color: "gray", margin: 0 }}>
              Icons made by
            </Text>
            <Text
              center
              style={styles.links}
              onPress={() => {
                Linking.openURL("https://www.freepik.com/");
              }}
            >
              https://www.freepik.com/
            </Text>

            <Text
              center
              style={styles.links}
              onPress={() => {
                Linking.openURL("https://fontawesome.com/license");
              }}
            >
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
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  },
  links: {
    color: "green",
    textDecorationLine: "underline"
  },
  header: {
    marginBottom: 20
  }
});
