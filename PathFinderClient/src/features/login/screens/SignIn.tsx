import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Keyboard } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import Svg, { Image } from "react-native-svg";
import { RootStackParamList } from "../navigation/AuthNavigator";
import SignInUpForm from "./SignInUpForm";

const img = require("../../../../assets/backgroundImages/715e8b73080499.5bfdacd4b40c6.jpg");

const { width, height } = Dimensions.get("window");

interface SingInProps {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}
export type signStatusType = "Sign UP" | "Sign IN" | undefined;

export default ({ navigation }: SingInProps) => {
  const easing = Easing.inOut(Easing.ease);

  const [signStatus, setsignStatus] = useState<signStatusType>(undefined);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const animate = useSharedValue(1);
  const progress = useDerivedValue(() => {
    return withTiming(animate.value, { duration: 1000, easing });
  });
  useEffect(() => {
    animate.value = signStatus ? 0 : 1;
  }, [animate, signStatus]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const buttonStyle = useAnimatedStyle(() => {
    const opacity = progress.value;

    const translateY = interpolate(
      progress.value,
      [0, 1],
      [100, 0],
      Extrapolate.CLAMP
    );
    return { opacity, transform: [{ translateY }] };
  });

  const animatedFormStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [1, 0]);
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [0, 100],
      Extrapolate.CLAMP
    );
    const zIndex = interpolate(progress.value, [0, 1], [50, -1]);
    return { opacity, transform: [{ translateY }], zIndex };
  });
  const animatedCloseBtnStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, 2 * Math.PI]);

    return { transform: [{ rotate: `${rotate}rad` }] };
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={[StyleSheet.absoluteFill]}>
        <Svg
          height={height}
          width={width}
          viewBox="0 0 1200 743"
          preserveAspectRatio="xMinYMid slice"
        >
          <Image href={img} />
        </Svg>
      </View>
      <View
        style={{
          height: height / 2,
          width: (width * 3) / 4,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: height / 4,
            width: "100%",
            flex: 1,
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Animated.View style={[buttonStyle]}>
            <RectButton
              style={[styles.button]}
              onPress={() => {
                setsignStatus("Sign UP");
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign UP</Text>
            </RectButton>
          </Animated.View>

          <Animated.View style={[buttonStyle]}>
            <RectButton
              style={[styles.button]}
              onPress={() => {
                setsignStatus("Sign IN");
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign IN</Text>
            </RectButton>
          </Animated.View>
        </View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            top: isKeyboardVisible ? 100 : 0,
          }}
        >
          <Animated.View style={[animatedFormStyle]}>
            {!isKeyboardVisible && (
              <RectButton
                style={styles.closeBtn}
                onPress={() => {
                  setsignStatus(undefined);
                }}
              >
                <Animated.View style={[animatedCloseBtnStyle]}>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    X
                  </Text>
                </Animated.View>
              </RectButton>
            )}
            <View style={{ marginTop: 20 }}>
              <SignInUpForm signStatus={signStatus}></SignInUpForm>
            </View>
          </Animated.View>
        </View>
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
});
