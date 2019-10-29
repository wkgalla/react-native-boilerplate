import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

type Props = {
    value: string;
    label: string;
    isPassword?: boolean;
    handleChange: (text: string) => void;
    handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const StyledTextInput = styled(TextInput)`
    margin-vertical: 5;
    background-color: white;
`;

const TextField = ({
    value,
    label,
    isPassword,
    handleChange,
    handleBlur
}: Props) => {
    return (
        <StyledTextInput
            label={label}
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
