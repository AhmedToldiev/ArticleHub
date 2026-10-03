import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../../../../../entities/User/model/types/user';
import { userActions } from '../../../../../entities/User/model/slice/UserSlice';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData: LoginByUsernameProps, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
