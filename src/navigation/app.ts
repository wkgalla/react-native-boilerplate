import { createStackNavigator } from 'react-navigation';
import routes from '#enums/routes';
import SignInScreen from '#screens/SignIn/sign-in-view';

const AppStack = createStackNavigator({
    [routes.HOME]: SignInScreen,
    Other: SignInScreen
});

export default AppStack;
