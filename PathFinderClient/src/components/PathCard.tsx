import { Dimensions, Image, StyleSheet, View } from "react-native";
import * as React from "react";
import { theme } from "../constants/theme";

export interface IPath {
  id: number;
  name: string;
  source: any;
  difficulty: string;
}

// const imageSource = require("../../assets/backgroundImages/715e8b73080499.5bfdacd4b40c6.jpg");

export const savedPaths: IPath[] = [
  {
    id: 0,
    name: "DevilsPark",
    difficulty: "Easy",
    source: require("../../assets/pathImages/DevilsPark.png"),
  },
  {
    id: 1,
    name: "PlatteklipGorge",
    difficulty: "Easy",
    source: require("../../assets/pathImages/PlatteklipGorge.png"),
  },
  {
    id: 2,
    name: "MaclearsBeacon",
    difficulty: "Easy",
    source: require("../../assets/pathImages/MaclearsBeacon.png"),
  },
  {
    id: 3,
    name: "IndiaVenster",
    difficulty: "Easy",
    source: require("../../assets/pathImages/IndiaVenster.png"),
  },
  {
    id: 4,
    name: "DevilsPark",
    difficulty: "Easy",
    source: require("../../assets/pathImages/DevilsPark.png"),
  },
  {
    id: 5,
    name: "PlatteklipGorge",
    difficulty: "Easy",
    source: require("../../assets/pathImages/PlatteklipGorge.png"),
  },
  {
    id: 6,
    name: "MaclearsBeacon",
    difficulty: "Easy",
    source: require("../../assets/pathImages/MaclearsBeacon.png"),
  },
  {
    id: 7,
    name: "IndiaVenster",
    difficulty: "Easy",
    source: require("../../assets/pathImages/IndiaVenster.png"),
  },
];
const { width } = Dimensions.get("window");

const CARD_ASPECT_RATIO = 170 / 288;
const CARD_WITH = width / 2.5;
const CARD_HEIGHT = (1 / CARD_ASPECT_RATIO) * CARD_WITH;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: theme.colors.black,
    shadowOpacity: 0.9,
    borderRadius: theme.sizes.radius,
    elevation: 10,
    width: CARD_WITH,
    height: CARD_HEIGHT,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 10,
  },
});
export interface PathCardProps {
  path: IPath;
}
export default ({ path }: PathCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={path.source} />
    </View>
  );
};
