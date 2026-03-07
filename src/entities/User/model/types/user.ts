export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    isLoading: boolean;
    error?: string;

    _inited?: boolean;
}
