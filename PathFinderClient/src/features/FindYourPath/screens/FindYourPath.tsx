import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import PathCard, { savedPaths, ISavedPath } from "../../../components/PathCard";
import { theme } from "../../../constants/theme";
import Typography from "../../../components/Typography";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/FindYoutPathStackNavigatior";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab]}
      >
        <Typography size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Typography>
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
    <View style={{ backgroundColor: theme.colors.white, flex:1 }}>
      <TopViewCurve
        width={Dimensions.get("window").width}
        height={30}
        color={theme.colors.white2}
      ></TopViewCurve>
      <View style={styles.header}>
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
  tabsContainer: { marginBottom: theme.sizes.base * 3 },
  tabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
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
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base,
  },
  image: {
    paddingHorizontal: theme.sizes.base,
  },
});
