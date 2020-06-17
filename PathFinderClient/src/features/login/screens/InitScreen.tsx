import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import CustomIcon from "../../../../assets/CATYCATHERINE0000213.svg";
import {
  Context as AuthContext,
  Consumer,
  Context,
} from "../../../contexts/AuthContext";
export default () => {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <CustomIcon width={120} height={120} />
      <Animated.View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("in onPRess");
            authContext && authContext.test();
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{authContext && authContext.state.isLoading}</Text>
        </TouchableWithoutFeedback>
      </Animated.View>
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
