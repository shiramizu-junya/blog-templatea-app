import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data/articleData';

export const ArticleDetail = () => {
	const { id } = useParams();

	const article = articlesData.find((item) => String(item.id) === id);

	return (
		<div>
			<Link
				to="/articles/list"
				className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
			>
				← 一覧に戻る
			</Link>

			<article className="prose max-w-none">
				<div className="mb-4">
					<span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded">
						{article.category}
					</span>
				</div>

				<h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
				<p className="text-gray-500 mb-6">{article.date}</p>

				<div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{article.content}</div>
			</article>
		</div>
	);
};
