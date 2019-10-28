import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'rb_auth_token';

const storageService = {
    set: async (key, value) => {
        if (!key || !value) {
            return false;
        }
        try {
            if (typeof value === 'object') {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            } else {
                await AsyncStorage.setItem(key, value);
            }
            return true;
        } catch (error) {
            return false;
        }
    },
    get: async key => {
        let value = await AsyncStorage.getItem(key);
        if (!value) {
            return undefined;
        }
        // assume it is an object or it is an array that has been stringified
        if (value[0] === '{' || value[0] === '[') {
            value = JSON.parse(value);
        }
        return value;
    },
    clear: () => {
        AsyncStorage.clear();
    }
};

// get services
export const getAuthToken = () => storageService.get(AUTH_TOKEN);

// set services
export const setAuthToken = payload => {
    storageService.set(AUTH_TOKEN, payload.authToken);
};

// clear storage
export const clearStorage = () => storageService.clear();
