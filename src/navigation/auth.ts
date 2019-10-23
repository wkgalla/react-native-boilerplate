import { createStackNavigator } from "react-navigation";
import routes from "@enums/routes";
import SignInScreen from "@modules/Auth/SignIn/sign-in-component";

const AuthStack = createStackNavigator(
  {
    [routes.SIGH_IN]: SignInScreen
  },
  {
    initialRouteName: routes.SIGH_IN
  }
);

export default AuthStack;
