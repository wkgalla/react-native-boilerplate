import { createStackNavigator } from "react-navigation";
import routes from "enums/routes";
import SignInScreen from "modules/Auth/SignIn/sign-in-component";

const AppStack = createStackNavigator({
  [routes.HOME]: SignInScreen,
  Other: SignInScreen
});

export default AppStack;
