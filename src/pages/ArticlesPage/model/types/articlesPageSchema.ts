import { EntityState } from '@reduxjs/toolkit';
import { ArticleView } from '../../../../entities/Article/model/types/article';
import { Article } from '../../../../entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
     // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited: boolean;
}
