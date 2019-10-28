import React from 'react';
import SignInForm from './sign-in-component';

const initialValues = {
    email: '',
    password: ''
};

const SignInContainer = () => <SignInForm initialValues={initialValues} />;

export default SignInContainer;
