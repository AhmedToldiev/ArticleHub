import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited } from '../entities/User/model/selectors/getUserInited/getUserInited';
import { userActions } from '../entities/User/model/slice/UserSlice';
import { AppRouter } from './router';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
