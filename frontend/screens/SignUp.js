import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Linking,
  AsyncStorage
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends Component {
  state = {
    name: null,
    dateofbirth: null,
    errors: [],
    loading: false
  };

  static navigationOptions = {
    headerRight: null
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
            Register
          </Text>
          <Input
            label="Name"
            value={name}
            error={hasErrors("name")}
            style={[styles.input, hasErrors("name")]}
            onChangeText={text => this.setState({ name: text })}
          />

          <Input
            label="Date of Birth"
            value={dateofbirth}
            error={hasErrors("dateofbirth")}
            style={[styles.input, hasErrors("dateofbirth")]}
            onChangeText={text => this.setState({ dateofbirth: text })}
          />
          <Button gradient onPress={async () => await this.handleSignUp()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Register
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
