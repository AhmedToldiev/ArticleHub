import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { SortOrder } from 'shared/types';
import { ArticleView, ArticleSortField, ArticleType } from '../../entities/Article/model/types/article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'features/ArticlesPageFilters',
    component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ArticlesPageFilters />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            view: ArticleView.SMALL,
            sort: ArticleSortField.CREATED,
            order: 'asc' as SortOrder,
            search: '',
            type: ArticleType.ALL,
            page: 1,
            limit: 9,
            hasMore: true,
            _inited: true,
            isLoading: false,
            ids: [],
            entities: {},
        },
    }),
];
