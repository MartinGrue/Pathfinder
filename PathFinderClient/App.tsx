import React from "react";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import AuthNavigator from "./src/features/login/navigation/AuthNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AuthNavigator></AuthNavigator>
      </AuthProvider>
    </SafeAreaProvider>
  );
};
