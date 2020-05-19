import React, {
  useState,

} from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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
  interpolate,
  Extrapolate,
  greaterThan,
  lessThan,
  lessOrEq,
  greaterOrEq,
  multiply,
  floor,
  abs,
} = Animated;
interface TextWrapperProps {
  scrolly: Animated.Value<number>;
}
const TextWrapper = ({ scrolly }: TextWrapperProps) => {
  const WordArr: string[] = [
    "Erster",
    "Zweiter",
    "Dritter",
    "Vierter",
    "Fuenfter",
    "Sechster",
    "Siebter",
    "Achter",
    "Neunter",
    "Zehnter",
  ];

  const textHeight = 20;
  const xOffset = 20;
  const yMax = (textHeight * WordArr.length) / 2;
  const xMax = (xOffset * WordArr.length) / 2;

  return (
    <Animated.View>
      {WordArr.map((word, index) => {
        return (
          <LittleFloater
            key={index}
            {...{
              scrolly,
              xOffset,
              textHeight,
              yMax,
              xMax,
              word,
              index,
            }}
          ></LittleFloater>
        );
      })}
    </Animated.View>
  );
};
interface LittleFloaterProps {
  scrolly: Animated.Value<number>;
  index: number;
  word: string;
  xOffset: number;
  textHeight: number;
  yMax: number;
  xMax: number;
}
const LittleFloater = ({
  scrolly,
  index,
  word,
  xOffset,
  textHeight,
  yMax,
  xMax,
}: LittleFloaterProps) => {
  const { outPutFrom, outPutTo, inputTo, prefScroll } = useMemoOne(
    () => ({
      outPutFrom: new Animated.Value(0),
      outPutTo: new Animated.Value(100),
      inputTo: new Animated.Value(0.00001),
      prefScroll: new Animated.Value(0),
    }),
    []
  );
  const translateX = interpolate(scrolly, {
    inputRange: [0, inputTo],
    outputRange: [outPutFrom, outPutTo],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateY = interpolate(scrolly, {
    inputRange: [0, 444],
    outputRange: [0, -444],
    extrapolate: Extrapolate.CLAMP,
  });
  const currentHeight = ceil(sub(index * textHeight, floor(abs(scrolly))));
  const xDiff = Math.abs(xMax - index * xOffset);

  useCode(
    () =>
      block([
        cond(
          lessOrEq(abs(sub(prefScroll, scrolly)), 50),
          [
            cond(
              greaterOrEq(currentHeight, yMax),
              [
                set(outPutFrom, xMax - xDiff),
                set(outPutTo, xMax),
                set(inputTo, xDiff + 0.00001),
              ],
              [
                set(outPutFrom, index * xOffset),
                set(outPutTo, 0),
                set(inputTo, index * xOffset + 0.00001),
              ]
            ),
          ],
          [
            cond(
              greaterOrEq(index * textHeight, yMax),
              [
                set(outPutFrom, xMax - xDiff),
                set(outPutTo, xMax),
                set(inputTo, xDiff + 0.00001),
              ],
              [
                set(outPutFrom, index * xOffset),
                set(outPutTo, 0),
                set(inputTo, index * xOffset + 0.00001),
              ]
            ),
          ]
        ),
        [set(prefScroll, scrolly)],
      ]),
    [scrolly]
  );
  return (
    <Animated.View
      style={{
        translateY,
        translateX,
        backgroundColor: "orange",
      }}
    >
      <View>
        <TouchableWithoutFeedback>
          <Text style={{ textAlign: "center", height: textHeight }}>
            {word}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};
interface FloaterProps {
  scrolly: Animated.Value<number>;
  offset: number;
}


export default () => {
  const { scrolly } = useMemoOne(
    () => ({
      scrolly: new Animated.Value(0),
    }),
    []
  );

  // const scrolly = new Animated.Value(0);
  useCode(() => block([call([scrolly], (s) => console.log(s))]), []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        overScrollMode="never"
        decelerationRate={0.9}
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
        <TextWrapper {...{ scrolly }}></TextWrapper>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
