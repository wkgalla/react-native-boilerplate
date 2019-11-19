import { createStackNavigator } from 'react-navigation';
import routes from '#enums/routes';
import SignInScreen from '#modules/Auth/SignIn/sign-in-container';
import SignUpScreen from '#modules/Auth/SignUp/sign-up-container';

const AuthStack = createStackNavigator(
    {
        [routes.SIGN_IN]: SignInScreen,
        [routes.SIGN_UP]: SignUpScreen
    },
    {
        initialRouteName: routes.SIGN_UP
    }
);

export default AuthStack;
