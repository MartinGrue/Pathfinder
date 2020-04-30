import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
const {
  useCode,
  block,
  call,
  event,
  set,
  cond,
  add,
  sub,
  eq,
  ceil,
  onChange,

  greaterThan,
  lessThan,
} = Animated;

interface FloaterProps {
  scrolly: Animated.Value<number>;
  offset: number;
}
const Floater = ({ scrolly, offset }: FloaterProps) => {
  const [index, setindex] = useState(offset);
  const TEXT_HEIGHT = 40;
  const WordArr: string[] = [
    "Erster",
    "Zweiter",
    "Dritter",
    "Vierter",
    "Fuenfter",
    "Sechster",
  ];

  const { lastScrolly } = useMemoOne(
    () => ({
      lastScrolly: new Animated.Value(0),
    }),
    []
  );

  const translateX = offset * 10;

  useCode(
    () =>
      block([
        onChange(scrolly, [
          cond(greaterThan(ceil(scrolly), add(lastScrolly, 10)), [
            set(lastScrolly, scrolly),
            call([scrolly], () => {
              setindex((prev) => prev + 1);
            }),
          ]),
          cond(lessThan(ceil(scrolly), sub(lastScrolly, 10)), [
            set(lastScrolly, scrolly),
            call([scrolly], () => {
              setindex((prev) => prev - 1);
            }),
          ]),
          cond(eq(ceil(scrolly), 0), [
            set(lastScrolly, scrolly),
            call([scrolly], () => {
              setindex(index);
            }),
          ]),
        ]),
      ]),
    []
  );
  useCode(() => block([]), []);
  return (
    <View
      style={{
        // position: "absolute",
        translateX: translateX,
        backgroundColor: "orange",
      }}
    >
      <View>
        <Text style={{ textAlign: "center", fontSize: 40 }}>
          {WordArr[index]}
        </Text>
      </View>
    </View>
  );
};

export default () => {
  const { scrolly } = useMemoOne(
    () => ({
      scrolly: new Animated.Value(0),
      outPutFrom: new Animated.Value(0),
      outPutTo: new Animated.Value(100),
    }),
    []
  );

  // const scrolly = new Animated.Value(0);
  useCode(() => block([call([scrolly], (s) => console.log(s))]), []);
  const arr_names = new Array<number>(10);
  for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={event([
          {
            nativeEvent: {
              contentOffset: {
                y: (y: any) => block([set(scrolly, y)]),
              },
            },
          },
        ])}
      >
        <View style={{ height: 1000, backgroundColor: "green" }}></View>
        {/* <Textes num={100} {...{ scrolly }}></Textes> */}
      </Animated.ScrollView>
      <View style={{ position: "absolute" }}>
        <Floater {...{ scrolly }} offset={0}></Floater>
        <Floater {...{ scrolly }} offset={1}></Floater>
        <Floater {...{ scrolly }} offset={2}></Floater>
        <Floater {...{ scrolly }} offset={3}></Floater>
        <Floater {...{ scrolly }} offset={4}></Floater>
        <Floater {...{ scrolly }} offset={5}></Floater>
        <Floater {...{ scrolly }} offset={6}></Floater>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
