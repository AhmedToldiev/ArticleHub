import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state:StateSchema) => state?.user?.authData?.roles || [];

export const IsUserAdmin = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.ADMIN)));
export const IsUserManager = createSelector(getUserRoles, roles => Boolean(roles?.includes(UserRole.MANAGER)));