import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import {
  Formik,
  useFormik,
  FormikState,
  FormikConfig,
  useFormikContext,
  Form,
} from "formik";
import { Text } from "@rneui/themed";
import { theme } from "../../../constants/theme";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { signStatusType } from "./SignIn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as AuthContext } from "../../../contexts/AuthContext";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface SingInUpFormProps {
  signStatus: signStatusType;
}
// export type Values = { email: string; password: string };
export type Values = Record<"email" | "password", string>;

const SubmitButton = ({ signStatus }: { signStatus: signStatusType }) => {
  const { isValid, handleSubmit, values, resetForm, validateForm } =
    useFormikContext<Values>();

  return (
    <Animated.View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.button]}
        disabled={!isValid}
        onPress={() => {
          validateForm(values).then(() => {
            handleSubmit();
            console.log(isValid);
            resetForm;
          });
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{signStatus}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
export default ({ signStatus }: SingInUpFormProps) => {
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   resetForm();
  // }, [signStatus]);

  const formikConfig: FormikConfig<Values> = {
    validationSchema,
    initialValues: { email: "", password: "" },
    onSubmit: (values: Values) => {
      console.log(values);
      console.log(signStatus);
      signStatus === "Sign IN" && authContext?.signin(values);
      signStatus === "Sign UP" && authContext?.signup(values);
    },
  };
  return (
    <View>
      <Formik {...formikConfig}>
        <>
          <FormInput
            name="email"
            placeholder="email"
            secureTextEntry={false}
            iconName="envelope"
          ></FormInput>
          <FormInput
            name={"password"}
            placeholder="password"
            secureTextEntry={true}
            iconName="lock"
          ></FormInput>
          <SubmitButton {...{ signStatus }}></SubmitButton>
        </>
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
  },
});
