import React, { useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import routes from '#enums/routes';
import { getAuthToken } from '#services/storage';

type Props = {
    navigation: NavigationScreenProp<{}>;
};

const StyledSpinner = styled(ActivityIndicator)`
    flex: 1;
`;

const AuthLoader = ({ navigation }: Props) => {
    useEffect(() => {
        getAuthToken().then(userToken => {
            navigation.navigate(userToken ? routes.APP : routes.AUTH);
        });
    }, [navigation]);
    return <StyledSpinner size="large" animating color={Colors.red800} />;
};

export default AuthLoader;
