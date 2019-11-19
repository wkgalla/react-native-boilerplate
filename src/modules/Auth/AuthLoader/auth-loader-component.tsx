import React, { useEffect } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import NavigationService from '#services/navigation-service';
import routes from '#enums/routes';
import { getAuthToken } from '#services/storage';

const StyledSpinner = styled(ActivityIndicator)`
    flex: 1;
`;

const AuthLoader = () => {
    useEffect(() => {
        getAuthToken().then(userToken => {
            NavigationService.navigate(userToken ? routes.APP : routes.AUTH);
        });
    }, []);
    return <StyledSpinner size="large" animating color={Colors.red800} />;
};

export default AuthLoader;
