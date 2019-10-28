import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ActivityIndicator, Colors } from 'react-native-paper';
import routes from '#enums/routes';
import { getAuthToken } from '#services/storage';

type Props = {
    navigation: NavigationScreenProp<{}>;
};

const AuthLoader = ({ navigation }: Props) => {
    useEffect(() => {
        getAuthToken().then(userToken => {
            navigation.navigate(userToken ? routes.APP : routes.AUTH);
        });
    }, [navigation]);
    return (
        <ActivityIndicator
            style={styles.container}
            size="large"
            animating
            color={Colors.red800}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default AuthLoader;
