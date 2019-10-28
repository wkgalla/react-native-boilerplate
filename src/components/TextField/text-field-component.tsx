import React from 'react';
import {
    StyleSheet,
    NativeSyntheticEvent,
    TextInputFocusEventData
} from 'react-native';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    inputContainer: {
        width: '100%',
        paddingVertical: 30
    },
    button: {
        // marginVertical: 5
    },
    textField: {
        marginVertical: 5,
        backgroundColor: 'white'
    }
});

type Props = {
    value: string;
    label: string;
    isPassword?: boolean;
    handleChange: (text: string) => void;
    handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const TextField = ({
    value,
    label,
    isPassword,
    handleChange,
    handleBlur
}: Props) => {
    return (
        <TextInput
            style={styles.textField}
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
