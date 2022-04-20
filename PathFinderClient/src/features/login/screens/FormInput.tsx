import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FormikErrors, FormikTouched } from "formik/dist/types";
import { Input } from "@rneui/themed";
import { Values } from "./SignInUpForm";
import { useFormikContext, Formik, Form, Field } from "formik";

interface FormInputProps {
  name: keyof Values;

  placeholder: string;
  secureTextEntry: boolean | undefined;
  iconName: string;
  // value: string;
  // error: string | undefined;
  // touched: boolean | undefined;
}
export default ({
  name,
  placeholder,
  secureTextEntry,
  iconName,
}: FormInputProps) => {
  const { handleChange, setFieldTouched, values, touched, errors } =
    useFormikContext<Values>();
  console.log("name: ", values);
  return (
    <View>
      <Input
        style={{ color: "white" }}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        placeholder={placeholder}
        placeholderTextColor="white"
        leftIcon={{
          type: "font-awesome",
          name: iconName,
          color: !touched[name] ? "white" : errors[name] ? "red" : "green",
        }}
        errorStyle={{
          height: 15,
          opacity: !touched[name] ? 0 : 1,
          fontWeight: "100",
          fontSize: 13,
        }}
        errorMessage={errors[name]}
        secureTextEntry={secureTextEntry}
        shake={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
