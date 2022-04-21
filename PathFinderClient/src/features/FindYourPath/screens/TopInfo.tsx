import React from "react";
import { theme } from "../../../constants/theme";
import { moonIcon, cursorIcon } from "./icons";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import Typography from "../../../components/Typography";

export default () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoLeft}>
        <View style={[styles.icon, { marginRight: 10 }]}>
          <SvgXml
            xml={moonIcon}
            width="50%"
            height="50%"
            fill={theme.colors.gray2}
          />
        </View>
        <Typography size={16} medium gray2>
          23km
        </Typography>
      </View>
      <View style={styles.infoRight}>
        <Typography size={16} medium gray2>
          23km
        </Typography>
        <View style={[styles.icon, { marginLeft: 10 }]}>
          <SvgXml
            xml={cursorIcon}
            width="50%"
            height="50%"
            fill={theme.colors.gray2}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeft: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  infoRight: {
    flexDirection: "row",
    backgroundColor: "green",
  },
  icon: {
    backgroundColor: theme.colors.white2,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
