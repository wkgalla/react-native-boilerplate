import { createSwitchNavigator, createAppContainer } from "react-navigation";
import routes from "enums/routes";
import AuthStack from "navigation/auth";
import AppStack from "navigation/app";
import AuthLoadingScreen from "modules/Auth/AuthLoader/auth-loader-component";

export default createAppContainer(
  createSwitchNavigator(
    {
      [routes.AUTH_LOADING]: AuthLoadingScreen,
      [routes.APP]: AppStack,
      [routes.AUTH]: AuthStack
    },
    {
      initialRouteName: routes.AUTH_LOADING
    }
  )
);
