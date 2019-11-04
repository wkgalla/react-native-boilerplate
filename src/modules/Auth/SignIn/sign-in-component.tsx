import React from 'react';
import { Headline, Button } from 'react-native-paper';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components/native';
import TextField from '#components/TextField/text-field-component';

type FormValues = {
    email: string;
    password: string;
};

type Props = {
    initialValues: FormValues;
};

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

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is Required'),
    password: Yup.string().required('Password is required')
});

export default function SignIn({ initialValues }: Props) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SigninSchema}
            onSubmit={values => console.log(values)}
        >
            {(props: FormikProps<FormValues>) => (
                <Container>
                    <Headline>Sign In</Headline>
                    <Wrapper>
                        <TextField
                            label="Email"
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            value={props.values.email}
                            errorMsg={props.errors.email}
                            touched={props.touched.email}
                        />
                        <TextField
                            label="Password"
                            secureTextEntry
                            onChangeText={props.handleChange('password')}
                            onBlur={props.handleBlur('password')}
                            value={props.values.password}
                            errorMsg={props.errors.password}
                            touched={props.touched.password}
                        />
                    </Wrapper>
                    <Button
                        icon="camera"
                        mode="contained"
                        onPress={props.handleSubmit as any}
                    >
                        Sign In
                    </Button>
                </Container>
            )}
        </Formik>
    );
}
