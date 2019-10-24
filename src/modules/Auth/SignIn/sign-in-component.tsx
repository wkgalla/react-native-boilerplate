import React from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Button } from "react-native-paper";
import { Formik, FormikProps } from 'formik';
import TextField from "@components/TextField/text-field-component";

type FormValues = {
  email: string;
  password: string;
}

type Props = {
  initialValues: FormValues;
}

export default function SignIn({ initialValues }: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {(props: FormikProps<FormValues>) => (
        <View style={styles.container}>
          <Headline>Sign In</Headline>
          <View style={styles.inputContainer}>
            <TextField
              label="Email"
              handleChange={props.handleChange('email')}
              handleBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            <TextField
              label="Password"
              isPassword={true}
              handleChange={props.handleChange('password')}
              handleBlur={props.handleBlur('password')}
              value={props.values.password}
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
      )}
    </Formik>
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
