import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classnames/classNames';
import { Button, ButtonTheme } from '@/widgets/Button/Button';
import { Input } from '@/widgets/Input/Input';
import { loginActions, loginReducer } from '@/features/AuthByUsername/model/slice/LoginSlice';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from '@/features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/widgets/Text/Text';
import i18n from '@/shared/config/i18n/i18n';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({
            username, password,
        }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        // eslint-disable-next-line
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>

            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} theme={TextTheme.PRIMARY} />

                {error && <Text text={i18n.t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
                <Input
                    placeholder={t('Введите логин')}
                    autofocus
                    type='text'
                    className={cls.input}
                    onChange={onChangeUserName}
                    value={username}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type='text'
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;