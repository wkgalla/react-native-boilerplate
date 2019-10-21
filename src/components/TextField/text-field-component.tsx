import * as React from "react";
import { KeyboardType } from "react-native";
import { TextInput } from "react-native-paper";
import { Field, FormikProps } from "formik";

interface ITextFieldProps {
  name: string;
  value: string;
  label: string;
  type: KeyboardType;
  placeholder: string;
}

const TextField = ({
  name,
  value,
  label,
  type,
  placeholder
}: ITextFieldProps) => {
  return (
    <Field
      name={name}
      render={(props: { form: FormikProps<ITextFieldProps> }) => {
        const {
          form: { errors, touched, handleChange }
        } = props;
        const showError = errors[name] && touched[name];
        return (
          <TextInput
            // style={styles.textField}
            label={label}
            keyboardType="email-address"
          // value={this.state.name}
          // error={!this._isUsernameValid(this.state.name)}
          // onChangeText={name => this.setState({ name })}
          />
        );
      }}
    />
  );
};

export default TextField;
