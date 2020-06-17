import React from "react";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import AuthNavigator from "./src/features/login/navigation/AuthNavigator";

export default () => {
  return (
    <AuthProvider>
      <AuthNavigator></AuthNavigator>
    </AuthProvider>
  );
};
