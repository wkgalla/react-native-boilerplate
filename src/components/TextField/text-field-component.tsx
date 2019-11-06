import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText, TextInputProps } from 'react-native-paper';
import styled from 'styled-components/native';

type Props = {
    ref?: (ref: unknown) => void;
    errorMsg: string;
};

const StyledTextInput = styled(TextInput)`
    margin-vertical: 5;
    background-color: white;
`;

const TextField = ({
    ref,
    errorMsg,
    label,
    secureTextEntry,
    onChangeText,
    onBlur
}: TextInputProps & Props) => {
    return (
        <View>
            <StyledTextInput
                ref={ref}
                label={label}
                onChangeText={onChangeText}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                error={Boolean(errorMsg)}
            />
            <HelperText type="error" visible={Boolean(errorMsg)}>
                {errorMsg}
            </HelperText>
        </View>
    );
};

export default TextField;
