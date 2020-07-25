import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FormikErrors, FormikTouched } from "formik/dist/types";
import { Input } from "react-native-elements";

interface FormInputProps {
  name: string;
  value: string;
  onChangeText: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  placeholder: string;
  error: string | undefined;
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void;
  touched: boolean | undefined;
  secureTextEntry: boolean | undefined;
  iconName: string;
}
export default ({
  name,
  value,
  onChangeText,
  placeholder,
  error,
  touched,
  setFieldTouched,
  secureTextEntry,
  iconName,
}: FormInputProps) => {
  return (
    <View>
      <Input
        value={value}
        style={{ marginBottom: 30 }}
        onChangeText={onChangeText(name)}
        onBlur={() => setFieldTouched(name)}
        placeholder={placeholder}
        leftIcon={{
          type: "font-awesome",
          name: iconName,
          color: !touched ? "black" : error ? "red" : "green",
        }}
        errorStyle={{ height: 15, opacity: !touched ? 0 : 1, fontWeight: "100", fontSize: 13}}
        errorMessage={error}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
