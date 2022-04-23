import React from "react";
import { View } from "react-native";
import { Input } from "@rneui/themed";
import { Values } from "./SignInUpForm";
import { useFormikContext } from "formik";

interface FormInputProps {
  name: keyof Values;
  placeholder: string;
  secureTextEntry: boolean | undefined;
  iconName: string;
}
export default ({
  name,
  placeholder,
  secureTextEntry,
  iconName,
}: FormInputProps) => {
  const { handleChange, setFieldTouched, values, touched, errors } =
    useFormikContext<Values>();
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
