import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { theme } from "../../../constants/theme";
import MapView from "react-native-maps";
import Typography from "../../../components/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons } from "@expo/vector-icons";
import TopViewCurve from "../../../constants/TopViewCurve";

const { width, height } = Dimensions.get("window");
const svgHeight = 30;
export default () => {
  return (
    <View style={{  flex: 1 }}>
      <View style={styles.mapContainer}>
        <MapView
          style={{ flex: 2, backgroundColor: "red" }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
        <View style={styles.locationInfoFlexWrapper}>
          <LinearGradient
            style={[styles.locationInfoContainer, styles.shadow]}
            colors={["#2A4337", "#432A36"]}
            start={[0, 0]}
            end={[1, 1]}
          >
            {[
              { name: "Duration", value: "00:00:00" },
              { name: "Distance", value: "5,3 km" },
              { name: "Speed Max", value: "71,9 km/h" },
            ].map((item) => {
              return (
                <View style={styles.locationInfo} key={item.name}>
                  <Typography
                    size={14}
                    light
                    color="white"
                    style={{ marginVertical: 4 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    size={18}
                    bold
                    color="white"
                    style={{ marginVertical: 4 }}
                  >
                    {item.value}
                  </Typography>
                </View>
              );
            })}
          </LinearGradient>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <ImageBackground
          source={require("../../../../assets/backgroundImages/ControllsBackground_downscaled.png")}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
          <Text>Hello</Text>
        </ImageBackground>
        <View style={styles.overlay}></View>
        <View style={styles.controlItemsContainer}>
          {["Record", "Cancel", "Pause", "Save"].map((num) => {
            return (
              <View key={Math.random()} style={styles.controlItem}>
                <Typography
                  size={18}
                  bold
                  color="white"
                  style={{ marginRight: 10 }}
                >
                  {num}
                </Typography>
                <SimpleLineIcons name="menu" size={18} color="#a3a19b" />
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          height:svgHeight-4
        }}
      >

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 32, //TODO header component for uniform styles on multiple screens + theme values
    marginVertical: theme.sizes.padding / 4,
  },
  headerText: { fontSize: 26, fontWeight: "bold" },
  mapContainer: { flex: 1.5 },
  locationInfoFlexWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: -50,
    width: width,
  },
  locationInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding / 2,
    paddingVertical: theme.sizes.padding / 4,
    width: width - theme.sizes.padding * 2,
    backgroundColor: theme.colors.white,
  },
  locationInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  controlsContainer: { flex: 1, overflow: "hidden" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  controlItemsContainer: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  controlItem: {
    width: 125,
    height: 55,
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding / 2,
    paddingVertical: theme.sizes.padding / 2,
    backgroundColor: theme.colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
