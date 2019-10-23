import React from "react";
import { TextInput } from "react-native-paper";

type Props = {
  value: string;
  label: string;
  isPassword: boolean;
  handleChange: () => void;
  handleBlur: () => void;
}

const TextField = ({
  value,
  label,
  isPassword,
  handleChange,
  handleBlur,
}: Props) => {
  return (
    <TextInput
      // style={styles.textField}
      label={label}
      keyboardType="email-address"
      value={value}
      onChangeText={handleChange}
      onBlur={handleBlur}
      secureTextEntry={isPassword}
    // error={!this._isUsernameValid(this.state.name)}
    // onChangeText={name => this.setState({ name })}
    />
  );
};

export default TextField;
