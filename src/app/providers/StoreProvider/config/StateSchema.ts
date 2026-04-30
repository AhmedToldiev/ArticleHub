import { EnhancedStore } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/editableProfileCard';
import { ArticleDetailsSchema } from '../../../../entities/Article';
import { ReducerManager } from './reducerManager';
import { UserSchema } from '../../../../entities/User';

export interface StateSchema {
    user: UserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema,
    articleDetailsPage?: ArticleDetailsPageSchema;

}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}