import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../../components/Typography";
import { theme } from "../../../constants/theme";

export default () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.stats}>
        <Typography size={16} medium gray2>
          Elevation
        </Typography>
        <Typography size={16} bold primary>
          348m
        </Typography>
      </View>
      <View style={[styles.stats]}>
        <Typography size={16} medium gray2>
          Elapsed Time
        </Typography>
        <Typography size={16} bold primary>
          02:21:56
        </Typography>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  statsContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  stats: {
    marginRight: theme.sizes.base * 2,
    marginLeft: theme.sizes.base * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.sizes.base*1.5,
    marginTop: theme.sizes.base*1,
    // borderTopWidth: 1,
    borderBottomWidth: 0.9,
    borderTopColor: "transparent",
    borderBottomColor: theme.colors.gray2,
  },
});
