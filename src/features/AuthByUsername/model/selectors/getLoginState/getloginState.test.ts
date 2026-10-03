import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from './getLoginState';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getLoginUserName.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Carlos',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Carlos');
    });

    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});