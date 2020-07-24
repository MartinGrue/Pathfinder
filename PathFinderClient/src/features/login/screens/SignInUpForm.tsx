import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { Formik, useFormik, FormikState } from "formik";
import { Input } from "react-native-elements";
import { theme } from "../../../constants/theme";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { signStatusType } from "./SignIn";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignupSchema = Yup.object().shape({
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
export default ({ signStatus }: SingInUpFormProps) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: SignupSchema,
  });
  useEffect(() => {
    formik.resetForm();
  }, [signStatus]);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FormInput
          name={"email"}
          value={formik.values.email}
          onChangeText={formik.handleChange}
          placeholder="email"
          error={formik.errors.email}
          touched={formik.touched.email}
          setFieldTouched={formik.setFieldTouched}
          secureTextEntry={false}
          iconName="envelope"
        ></FormInput>
        <FormInput
          name={"password"}
          value={formik.values.password}
          onChangeText={formik.handleChange}
          placeholder="password"
          error={formik.errors.password}
          touched={formik.touched.password}
          setFieldTouched={formik.setFieldTouched}
          secureTextEntry={true}
          iconName="lock"
        ></FormInput>
        <View>
          <Animated.View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.button]}
              disabled={!formik.isValid}
              onPress={() => {
                formik.validateForm(formik.values).then(() => {
                  formik.handleSubmit();
                  console.log(formik.isValid);
                  formik.resetForm;
                });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {signStatus}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
