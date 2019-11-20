import React from 'react';
import SignInForm from './sign-in-view';

const initialValues = {
    email: '',
    password: ''
};

const SignInContainer = () => <SignInForm initialValues={initialValues} />;

export default SignInContainer;
