import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, HelperText, Button } from "react-native-paper";
import TextField from "@components/TextField/text-field-component";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Headline>Sign In</Headline>
      <View style={styles.inputContainer}>
        <TextField
          label="Email"
        />
        <TextField
          label="Password"
          isPassword={true}
        />
      </View>
      <Button
        style={styles.button}
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Sign In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  inputContainer: {
    width: "100%",
    paddingVertical: 30
  },
  button: {
    // marginVertical: 5
  },
  textField: {
    marginVertical: 5,
    backgroundColor: "white"
  }
});
