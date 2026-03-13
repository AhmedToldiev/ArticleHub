import { classNames } from 'shared/lib/classnames/classNames';
import { memo } from 'react';
import { ArticleList } from '../../../../entities/Article/ui/ArticleList/ArticleList';
import cls from './ArticlesPage.module.scss';
import { ArticleView } from '../../../../entities/Article/model/types/article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.SMALL}
                articles={[]}
            />
        </div>

    );
};

export default memo(ArticlesPage);
