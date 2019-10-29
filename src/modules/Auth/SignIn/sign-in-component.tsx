import React from 'react';
import { Headline, Button } from 'react-native-paper';
import { Formik, FormikProps } from 'formik';
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

export default function SignIn({ initialValues }: Props) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {(props: FormikProps<FormValues>) => (
                <Container>
                    <Headline>Sign In</Headline>
                    <Wrapper>
                        <TextField
                            label="Email"
                            handleChange={props.handleChange('email')}
                            handleBlur={props.handleBlur('email')}
                            value={props.values.email}
                        />
                        <TextField
                            label="Password"
                            isPassword
                            handleChange={props.handleChange('password')}
                            handleBlur={props.handleBlur('password')}
                            value={props.values.password}
                        />
                    </Wrapper>
                    <Button
                        icon="camera"
                        mode="contained"
                        onPress={() => console.log('Pressed')}
                    >
                        Sign In
                    </Button>
                </Container>
            )}
        </Formik>
    );
}
