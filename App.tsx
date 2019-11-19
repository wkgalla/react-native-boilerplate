import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from '#navigation/index';
import NavigationService from '#services/navigation-service';

export default function App() {
    return (
        <PaperProvider>
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        </PaperProvider>
    );
}
