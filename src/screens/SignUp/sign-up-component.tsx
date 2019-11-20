import React from 'react';
import SignUpForm from './sign-up-view';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpContainer = () => <SignUpForm initialValues={initialValues} />;

export default SignUpContainer;
