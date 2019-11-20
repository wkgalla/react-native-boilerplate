import React from 'react';
import { Headline, Button } from 'react-native-paper';
import * as Yup from 'yup';
import useForm from 'react-hook-form';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextField from '#components/TextField/text-field-view';
import NavigationService from '#services/navigation-service';
import Routes from '#enums/routes';

type FormValues = {
    email: string;
    password: string;
};

type Props = {
    initialValues: FormValues;
};

const StyledKeyboardAwareView = styled(KeyboardAwareScrollView).attrs(() => ({
    contentContainerStyle: {
        flex: 1
    }
}))``;

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-horizontal: 20;
    margin-bottom: 20;
`;

const Wrapper = styled.View`
    width: 100%;
    padding-vertical: 30;
`;

const StyledButton = styled(Button)`
    margin-vertical: 6;
`;

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
    )
});

const navigateToSignIn = () => NavigationService.replace(Routes.SIGN_IN);

export default function SignUp({ initialValues }: Props) {
    const { register, setValue, handleSubmit, errors } = useForm<FormValues>({
        defaultValues: initialValues,
        validationSchema: SignupSchema
    });
    const onSubmit = data => Alert.alert('Form Data', data);
    return (
        <StyledKeyboardAwareView extraHeight={200}>
            <Container>
                <Headline>Sign Up</Headline>
                <Wrapper>
                    <TextField
                        label="Name"
                        ref={register({ name: 'name' })}
                        onChangeText={text => setValue('name', text)}
                        errorMsg={errors.name && errors.name.message}
                    />
                    <TextField
                        label="Email"
                        ref={register({ name: 'email' })}
                        onChangeText={text => setValue('email', text)}
                        errorMsg={errors.email && errors.email.message}
                    />
                    <TextField
                        label="Password"
                        secureTextEntry
                        ref={register({ name: 'password' })}
                        onChangeText={text => setValue('password', text)}
                        errorMsg={errors.password && errors.password.message}
                    />
                    <TextField
                        label="Confirm Password"
                        secureTextEntry
                        ref={register({ name: 'confirmPassword' })}
                        onChangeText={text => setValue('confirmPassword', text)}
                        errorMsg={
                            errors.confirmPassword &&
                            errors.confirmPassword.message
                        }
                    />
                </Wrapper>
                <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
                    Sign Up
                </StyledButton>
                <StyledButton
                    mode="text"
                    uppercase={false}
                    color="grey"
                    onPress={navigateToSignIn}
                >
                    Already have an account? Sign in
                </StyledButton>
            </Container>
        </StyledKeyboardAwareView>
    );
}
