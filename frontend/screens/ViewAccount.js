import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Divider, Block, Text, FundsStatus, EditField } from "../components";
import { theme } from "../constants";
import DateTimePicker from "react-native-modal-datetime-picker";

class NewAccount extends Component {
  state = {
    loading: false,
    isDateTimePickerVisible: false
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = date => {
    const onDateChange = this.props.navigation.getParam("onDateChange");
    const fund = this.props.navigation.getParam("fund");
    onDateChange(date);
    this.props.navigation.setParams({
      fund: {
        ...fund,
        targetDate: date
      }
    });
    this.hideDateTimePicker();
  };

  handleTargetChanged = target => {
    const onTargetChange = this.props.navigation.getParam("onTargetChange");
    const fund = this.props.navigation.getParam("fund");
    onTargetChange(Number(target));
    this.props.navigation.setParams({
      fund: {
        ...fund,
        target
      }
    });
  };

  render = () => {
    const { isDateTimePickerVisible } = this.state;
    const {
      title,
      amount,
      targetDate,
      target
    } = this.props.navigation.getParam("fund");

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            {title}
          </Text>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FundsStatus currentAmount={amount} goalAmount={target} />

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={styles.inputs}>
            <EditField
              label="Target Date"
              value={targetDate.toString().slice(0, 15)}
              onEdit={this.showDateTimePicker}
              isEditing={this.state.isDateTimePickerVisible}
            />
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
            <EditField
              label="Target"
              inputType="numeric"
              value={target.toString()}
              onChangeText={this.handleTargetChanged}
            />
          </Block>
        </ScrollView>
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
