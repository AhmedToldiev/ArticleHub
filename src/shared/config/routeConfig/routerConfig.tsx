import { useSelector } from 'react-redux';
import { Navigate, RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import AdminPanelPage from '@/pages/AdminPanelPage/ui/AdminPanelPage';
import ForbiddenPage from '@/pages/ForbiddenPage/ui/ForbiddenPage';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { UserRole } from '../../../entities/User/model/types/user';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    PROFILE_REDIRECT = 'profile_redirect',
    NOT_FOUND = 'not_found',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.PROFILE_REDIRECT]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
};

const ProfileRedirect = () => {
    const authData = useSelector(getUserAuthData);

    if (!authData) {
        return <Navigate to={RoutePath.main} replace />;
    }

    return <Navigate to={`${RoutePath.profile}${authData.id}`} replace />;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE_REDIRECT]: {
        path: RoutePath.profile_redirect,
        element: <ProfileRedirect />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
        authOnly: true,
    },
};
