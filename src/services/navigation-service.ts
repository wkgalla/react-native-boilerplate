import {
    NavigationActions,
    StackActions,
    NavigationContainerComponent,
    NavigationParams
} from 'react-navigation';
import Routes from '#enums/routes';

let navigator: NavigationContainerComponent;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    navigator = navigatorRef;
}

function navigate(routeName: Routes, params?: NavigationParams) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function replace(routeName: Routes, params?: NavigationParams) {
    navigator.dispatch(
        StackActions.replace({
            routeName,
            params
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    replace,
    setTopLevelNavigator
};
