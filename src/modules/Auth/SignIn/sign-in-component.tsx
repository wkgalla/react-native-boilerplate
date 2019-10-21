import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, HelperText, Button } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <Headline>Sign In</Headline>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textField}
          label="Email"
          keyboardType="email-address"
          // value={this.state.name}
          // error={!this._isUsernameValid(this.state.name)}
          // onChangeText={name => this.setState({ name })}
        />
        {/* <HelperText
          type="error"
          // visible={!this._isUsernameValid(this.state.name)}
        >
          Error: Only letters are allowed
        </HelperText> */}
        <TextInput
          style={styles.textField}
          label="Password"

          // value={this.state.name}
          // error={!this._isUsernameValid(this.state.name)}
          // onChangeText={name => this.setState({ name })}
        />
        {/* <HelperText
          type="error"
          // visible={!this._isUsernameValid(this.state.name)}
        >
          Error: Only letters are allowed
        </HelperText> */}
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
