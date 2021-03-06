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

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string().required('Password is required')
});

const navigateToSignUp = () => NavigationService.replace(Routes.SIGN_UP);

export default function SignIn({ initialValues }: Props) {
    const { register, setValue, handleSubmit, errors } = useForm<FormValues>({
        defaultValues: initialValues,
        validationSchema: SigninSchema
    });
    const onSubmit = data => Alert.alert('Form Data', data);
    return (
        <StyledKeyboardAwareView extraHeight={200}>
            <Container>
                <Headline>Sign In</Headline>
                <Wrapper>
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
                </Wrapper>

                <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
                    Sign In
                </StyledButton>
                <StyledButton
                    mode="text"
                    uppercase={false}
                    color="grey"
                    onPress={navigateToSignUp}
                >
                    Don&apos;t have an account? Sign up
                </StyledButton>
            </Container>
        </StyledKeyboardAwareView>
    );
}
