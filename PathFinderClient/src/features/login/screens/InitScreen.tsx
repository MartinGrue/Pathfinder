import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "../../../../assets/CATYCATHERINE0000213.svg";
export default () => {
  return (
    <View style={styles.container}>
      <CustomIcon width={120} height={120} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
  },
});
