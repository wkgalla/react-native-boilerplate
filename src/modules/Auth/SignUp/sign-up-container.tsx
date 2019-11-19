import React from 'react';
import SignUpForm from './sign-up-component';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpContainer = () => <SignUpForm initialValues={initialValues} />;

export default SignUpContainer;
