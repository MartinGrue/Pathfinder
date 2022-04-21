import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import Typography from "../../../components/Typography";
import { theme } from "../../../constants/theme";
import { markerRendering } from "./icons";

export default () => {
  return (
    <View style={styles.routingContainer}>
      <View style={styles.routingContainer2}>
        <View style={styles.directionIcon}>
          <SvgXml xml={markerRendering} width={25} height={25} />
        </View>
        <View style={styles.directionText}>
          <Typography size={16} small gray2>
            02:21:56
          </Typography>
          <Typography size={22} bold primary>
            02:21:56
          </Typography>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  routingContainer: {
      flex: 1,
      backgroundColor:"grey"
    // flex: 1.2,
    // justifyContent: "center",
  },
  routingContainer2: {
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    backgroundColor: theme.colors.white2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: theme.sizes.radius,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  directionIcon: {
    width: 75,
    height: 75,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  directionText: {
    flexDirection: "column",
    paddingLeft: 20,
  },
});
