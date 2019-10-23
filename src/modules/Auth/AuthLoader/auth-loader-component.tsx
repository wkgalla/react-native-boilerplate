import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import routes from "@enums/routes";
import { getAuthToken } from "@services/storage";

const AuthLoader = props => {
  useEffect(() => {
    getAuthToken().then(userToken => {
      props.navigation.navigate(userToken ? routes.APP : routes.AUTH);
    });
  }, []);
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      animating={true}
      color={Colors.red800}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AuthLoader;
