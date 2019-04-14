import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../constants";
import { Text } from "../components";

const PointGainBadge = ({ points }) => (
  <View style={styles.block}>
    <Text h3 black>
      {points} <Icon name="ios-flame" size={20} color={theme.colors.fire} />
    </Text>
  </View>
);
const styles = StyleSheet.create({
  block: {
    borderWidth: 4,
    width: 40,
    height: 40,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
    marginLeft: -20
  }
});

export default PointGainBadge;
