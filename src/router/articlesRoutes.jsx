import { ArticleList } from '../components/ArticleList';
import { ArticleNew } from '../components/ArticleNew';
import { ArticleDetail } from '../components/ArticleDetail';

export const articlesRoutes = [
	{
		path: 'list',
		element: <ArticleList />,
	},
	{
		path: 'new',
		element: <ArticleNew />,
	},
	{
		// :id は動的パラメータ（任意の値が入る）
		path: 'detail/:id',
		element: <ArticleDetail />,
	},
];
