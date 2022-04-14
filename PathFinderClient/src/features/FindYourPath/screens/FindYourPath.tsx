import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import PathCard, { savedPaths, ISavedPath } from "../../../components/PathCard";
import { theme } from "../../../constants/theme";
import Typography from "../../../components/Typography";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";
import {
  RectButton,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import TopViewCurve from "../../../constants/TopViewCurve";

interface FindYourPathProps {
  navigation: StackNavigationProp<StackParamList, keyof StackParamList>;
}
export default ({ navigation }: FindYourPathProps) => {
  const tabs = ["Easy", "Moderate", "Difficult", "Extreme"];
  const [active, setactive] = useState<string>("Easy");
  const [activePaths, setactivePaths] = useState<ISavedPath[]>(
    savedPaths.filter((path) => path.difficulty === "Easy")
  );
  const animatePress = (savedPath: ISavedPath) => {
    navigation.navigate("FindYourPathButtomTabNavigator", { savedPath });
  };
  const handleTab = (tab: string) => {
    setactive(tab);
    const filtered = savedPaths.filter((path) => path.difficulty === tab);
    setactivePaths(filtered);
  };
  const renderTab = (tab: string) => {
    console.log(tab);
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab]}
      >
        <Text
        // style={{
        //   marginVertical: 4,
        //   fontSize: 16,
        //   fontWeight: "500",
        //   // color: isActive ? theme.colors.secondary : theme.colors.gray,
        // }}
        >
          {tab}
        </Text>
        <View
          style={[
            styles.tabPoint,
            {
              backgroundColor: isActive
                ? theme.colors.secondary
                : theme.colors.white,
            },
          ]}
        ></View>
      </TouchableOpacity>
    );
  };
  const renderCard = (savedPath: ISavedPath) => {
    return (
      //Todo: scale animation on press
      <TouchableWithoutFeedback
        key={savedPath.id}
        onPress={() => animatePress(savedPath)}
      >
        <View style={[styles.image, { paddingTop: savedPath.id % 2 ? 0 : 30 }]}>
          <PathCard {...{ savedPath }}></PathCard>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.header}>
        <Animated.View>
          <RectButton
            {...{
              onPress: () => {
                console.log("hi");
              },
              style: {
                marginBottom: 20,
                backgroundColor: "white",
                height: 50,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 10,
              },
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>GO BACK</Text>
          </RectButton>
        </Animated.View>
        <Text style={styles.headerText}>Find Your Path</Text>
      </View>
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>{tabs.map((tab) => renderTab(tab))}</View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: (activePaths.length / 2) * 90,
        }}
      >
        <View style={styles.imageContainer}>
          {activePaths.map((savedPath) => renderCard(savedPath))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 32,
  },
  headerText: { fontSize: 26, fontWeight: "bold" },
  tabsContainer: {
    backgroundColor: "blue",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
    backgroundColor: "green",
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.sizes.base * 2,
    backgroundColor: "red",
  },
  tabPoint: {
    marginVertical: theme.sizes.base * 0.5,
    borderRadius: 50,
    width: 5,
    height: 5,
  },
  active: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
  },
  imageContainer: {
    backgroundColor: "magenta",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base,
  },
  image: {
    paddingHorizontal: theme.sizes.base,
  },
});
