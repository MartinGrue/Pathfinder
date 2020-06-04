import React, { Component, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import Animated, { Easing, useCode } from "react-native-reanimated";
import {
  TapGestureHandler,
  State,
  TouchableWithoutFeedback,
  TapGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import { useMemoOne } from "use-memo-one";
import { theme } from "../../constants/theme";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";
import { RootStackParamList } from "../../../App";
import { Context as AuthContext } from "../../contexts/AuthContext";

const { width, height } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

function runTiming(
  clock: Animated.Clock,
  value: Animated.Value<number>,
  dest: Animated.Value<number>
) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}
interface SingInProps {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
export default ({ navigation }: SingInProps) => {
  const [signState, setsignState] = useState<State>(0);
  type signStatusType = "Sign UP" | "Sign IN" | undefined;
  const [signStatus, setsignStatus] = useState<signStatusType>(undefined);

  const { state, signup, signin } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useCode(
    () =>
      block([
        cond(
          eq(signState, State.END),
          set(buttonOpacity, runTiming(new Clock(), new Value(1), new Value(0)))
        ),
      ]),
    [signState]
  );

  const { buttonOpacity } = useMemoOne(
    () => ({
      buttonOpacity: new Value(1),
      buttonY: new Value(0),
      bgY: new Value(0),
    }),
    []
  );
  const driveAnimation = (
    value: Animated.Value<1>,
    from: Animated.Value<0 | 1>,
    to: Animated.Value<0 | 1>
  ) => {
    return event([
      {
        nativeEvent: {
          state: (state: any) =>
            block([
              cond(
                eq(state, State.END),
                set(value, runTiming(new Clock(), from, to))
              ),
            ]),
        },
      },
    ]);
  };
  const buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const bgY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3 - 50, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const textInputZ = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });
  const textInputY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP,
  });
  const textInputOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const rotateCross = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 2 * Math.PI],
    extrapolate: Extrapolate.CLAMP,
  });
  const onHandlerStateChange = (
    event: TapGestureHandlerStateChangeEvent,
    status: signStatusType
  ) => {
    if (event.nativeEvent.state === State.BEGAN) {
      setsignStatus(status);
      console.log(signStatus);
    }
    setsignState(event.nativeEvent.state);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end",
      }}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ translateY: bgY }],
          },
        ]}
      >
        <Svg height={height + 50} width={width}>
          <ClipPath id="clip">
            <Circle r={height + 50} cx={width / 2}></Circle>
          </ClipPath>
          <Image
            href={require("../../../assets/backgroundImages/16005d75049113.5c41a9a794781.jpg")}
            width={width}
            height={height + 50}
            preserveAspectRatio="xMinYMax slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </Animated.View>
      <View style={{ height: height / 3 }}>
        <TapGestureHandler
          onHandlerStateChange={(e) => onHandlerStateChange(e, "Sign UP")}
        >
          <Animated.View
            style={{
              marginTop: 20,
              ...styles.button,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign UP</Text>
          </Animated.View>
        </TapGestureHandler>
        <TapGestureHandler
          onHandlerStateChange={(e) => onHandlerStateChange(e, "Sign IN")}
        >
          <Animated.View
            style={{
              marginTop: 20,
              ...styles.button,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign IN</Text>
          </Animated.View>
        </TapGestureHandler>
        <Animated.View
          style={
            (StyleSheet.absoluteFill,
            {
              position: "absolute",
              top: 0,
              marginHorizontal: width / 8,
              opacity: textInputOpacity,
              zIndex: textInputZ,
              backgroundColor: theme.colors.white,
              transform: [{ translateY: textInputY }],
              height: height / 3,

              width: (width * 3) / 4,
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-around",
              paddingTop: 50,
              paddingBottom: 50,
            })
          }
        >
          <TapGestureHandler
            onHandlerStateChange={driveAnimation(
              buttonOpacity,
              new Animated.Value(0),
              new Animated.Value(1)
            )}
          >
            <Animated.View style={styles.closeBtn}>
              <Animated.Text
                style={{ fontSize: 15, transform: [{ rotate: rotateCross }] }}
              >
                X
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>
          <Input
            onChangeText={(newemail) => {
              setemail(newemail);
            }}
            inputContainerStyle={{ marginBottom: 20 }}
            placeholder="youremail@address.com"
            leftIcon={{
              type: "font-awesome",
              name: "envelope",
              color: "white",
            }}
          />
          <Input
            onChangeText={(newpassword) => {
              setpassword(newpassword);
            }}
            inputContainerStyle={{ marginBottom: 20 }}
            placeholder="Password"
            leftIcon={{
              type: "font-awesome",
              name: "lock",
              color: "white",
            }}
          />
          <Animated.View style={styles.button}>
            <TouchableWithoutFeedback
              onPress={() => {
                signStatus === "Sign IN"
                  ? signin({ email, password }).then(
                      navigation.navigate("MainFlow")
                    )
                  : signup({ email, password }).then(
                      navigation.navigate("MainFlow")
                    );
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {signStatus}
              </Text>
            </TouchableWithoutFeedback>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
  },
  closeBtn: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: (width * 3) / 8 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
  },
  textInput: {},
});
