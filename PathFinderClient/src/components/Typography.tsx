import React, { ReactNode } from "react";
import { StyleSheet, Text, StyleProp, TextStyle } from "react-native";
import { theme } from "../constants/theme";

interface TextProps {
  h1: boolean;
  h2: boolean;
  h3: boolean;
  title: boolean;
  body: boolean;
  caption: boolean;
  small: boolean;
  size: number;
  transform: "none" | "capitalize" | "uppercase" | "lowercase";
  align: "auto" | "left" | "right" | "center" | "justify";
  // styling
  regular: boolean;
  bold: boolean;
  semibold: boolean;
  medium: boolean;
  weight:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  light: boolean;
  center: boolean;
  right: boolean;
  spacing: number; // letter-spacing
  height: number; // line-height
  // colors
  color: keyof typeof theme.colors;
  accent: boolean;
  primary: boolean;
  secondary: boolean;
  tertiary: boolean;
  black: boolean;
  white: boolean;
  gray: boolean;
  gray2: boolean;
  style: StyleProp<TextStyle>;
  children: ReactNode | string;
}
export default ({
  h1,
  h2,
  h3,
  title,
  body,
  caption,
  small,
  size,
  transform,
  align,
  // styling
  regular,
  bold,
  semibold,
  medium,
  weight,
  light,
  center,
  right,
  spacing, // letter-spacing
  height, // line-height
  // colors
  color,
  accent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  gray2,
  style,
  children,
}: Partial<TextProps>) => {
  const textStyles: StyleProp<TextStyle> = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && { color },
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  // variations
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "500",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  white2: { color: theme.colors.white2 },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small,
});
