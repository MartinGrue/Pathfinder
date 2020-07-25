import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../../../assets/CATYCATHERINE0000213.svg";
import { theme } from "../../../constants/theme";
export default () => {
  return (
    <View style={styles.container}>
      <CustomIcon width={220} height={220} fill={theme.colors.white2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
