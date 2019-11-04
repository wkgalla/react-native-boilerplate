import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText, TextInputProps } from 'react-native-paper';
import styled from 'styled-components/native';

type Props = {
    value: string;
    errorMsg: string;
    touched: boolean;
};

const StyledTextInput = styled(TextInput)`
    margin-vertical: 5;
    background-color: white;
`;

const TextField = ({
    value,
    errorMsg,
    touched,
    label,
    secureTextEntry,
    onChangeText,
    onBlur
}: TextInputProps & Props) => {
    return (
        <View>
            <StyledTextInput
                label={label}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                error={errorMsg && touched}
            />
            <HelperText type="error" visible={errorMsg && touched}>
                {errorMsg}
            </HelperText>
        </View>
    );
};

export default TextField;
