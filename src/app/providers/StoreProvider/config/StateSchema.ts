import { EnhancedStore } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { ArticleDetailsSchema } from '../../../../entities/Article';
import { ProfileSchema } from '../../../../entities/Profile';
import { ReducerManager } from './reducerManager';
import { UserSchema } from '../../../../entities/User';

export interface StateSchema {
    user: UserSchema;
    ui: UISchema;

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