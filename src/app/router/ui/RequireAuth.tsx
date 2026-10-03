import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routerConfig';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { UserRole } from '../../../entities/User/model/types/user';
import { getUserRoles } from '../../../entities/User/model/selectors/roleSelectors';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}
export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    const userRoles = useSelector(getUserRoles);
    const hasRequiredRole = useMemo(() => {
        if (!roles || roles.length === 0) {
            return true;
        }
        return roles.some(requiredRole => {
            return userRoles.includes(requiredRole);
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}