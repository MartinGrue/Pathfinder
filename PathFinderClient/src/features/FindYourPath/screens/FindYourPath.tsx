import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PathCard, { savedPaths, IPath } from "../../../components/PathCard";
import { theme } from "../../../constants/theme";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { Context } from "../../../contexts/AuthContext";

export default () => {
  const navigation =
    useNavigation<StackNavigationProp<StackParamList, keyof StackParamList>>();
  const { setHeaderText } = useContext(Context)!;

  const tabs = ["Easy", "Moderate", "Difficult", "Extreme"];

  const [active, setactive] = useState<string>("Easy");
  const [activePaths, setactivePaths] = useState<IPath[]>(
    savedPaths.filter((path) => path.difficulty === "Easy")
  );
  const onCardPress = (path: IPath) => {
    navigation.navigate("FindYourPathButtomTabNavigator", { path });
    setHeaderText(path.name);
  };
  const handleTab = (tab: string) => {
    setactive(tab);
    const filtered = savedPaths.filter((path) => path.difficulty === tab);
    setactivePaths(filtered);
  };
  const renderTab = (tab: string) => {
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab]}
      >
        <Text
          style={{
            marginVertical: 4,
            fontSize: 16,
            fontWeight: "500",
            color: isActive ? theme.colors.secondary : theme.colors.gray,
          }}
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
  const renderCard = (path: IPath) => {
    return (
      //Todo: scale animation on press
      <TouchableWithoutFeedback key={path.id} onPress={() => onCardPress(path)}>
        <View style={[styles.image, { paddingTop: path.id % 2 ? 0 : 30 }]}>
          <PathCard {...{ path }}></PathCard>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find Your Path</Text>
      </View>
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>{tabs.map((tab) => renderTab(tab))}</View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {activePaths.map((savedPath) => renderCard(savedPath))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base,
    paddingHorizontal: 32,
  },
  headerText: { fontSize: 26, fontWeight: "bold" },
  tabsContainer: {},
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.sizes.base * 2,
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: theme.sizes.base,
  },
  image: {
    paddingHorizontal: theme.sizes.base,
  },
});
