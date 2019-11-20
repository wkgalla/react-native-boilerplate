import { createStackNavigator } from 'react-navigation';
import routes from '#enums/routes';
import SignInScreen from '#screens/SignIn/sign-in-component';
import SignUpScreen from '#screens/SignUp/sign-up-component';

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
