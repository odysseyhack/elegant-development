import React, { Component } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import {
  Divider,
  Block,
  Text,
  FundsStatus,
  Button,
  EditField
} from "../components";
import { theme } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "react-native-modal-datetime-picker";

class NewAccount extends Component {
  state = {
    loading: false,
    isDateTimePickerVisible: false,
    account: {
      label: "",
      target: "0",
      targetDate: new Date()
    }
  };

  handleEdit = (name, text) => {
    const { account } = this.state;
    account[name] = text;

    this.setState({ account });
  };

  onSave = () => {
    const { label, target, targetDate } = this.state.account;

    this.setState({ loading: true });
    if (label !== "" && target !== "" && targetDate !== "") {
      const saveAccount = this.props.navigation.getParam("saveAccount");
      saveAccount({
        label,
        target,
        targetDate
      });
      this.props.navigation.goBack();
    } else {
      // TODO: handle error
      this.setState({ loading: false });
    }
  };

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
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = date => {
    this.handleEdit("targetDate", date);
    this.hideDateTimePicker();
  };

  render = () => {
    const { account, isDateTimePickerVisible } = this.state;

    return (
      <Block>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraHeight={30}
        >
          <Block style={styles.inputs}>
            <Text h1 bold>
              New Account
            </Text>
          </Block>
          <Divider />
          <FundsStatus currentAmount={0} goalAmount={Number(account.target)} />

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={styles.inputs}>
            <EditField
              label="Label"
              value={account.label}
              onChangeText={val => this.handleEdit("label", val)}
            />
            <EditField
              label="Target"
              inputType="numeric"
              value={account.target}
              onChangeText={val => this.handleEdit("target", val)}
            />
            <EditField
              label="Target Date"
              value={account.targetDate.toString().slice(0, 15)}
              onEdit={this.showDateTimePicker}
              isEditing={this.state.isDateTimePickerVisible}
            />
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </Block>
        </KeyboardAwareScrollView>
        {this.renderFooter()}
      </Block>
    );
  };
}

export default NewAccount;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.sizes.base * 2
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  }
});
