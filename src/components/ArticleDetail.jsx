import { useLocation, Link } from 'react-router-dom';

export const ArticleDetail = () => {
	// 記事のデータはLinkのstate経由で受け取る
	const { state } = useLocation();

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
						{state.category}
					</span>
				</div>

				<h1 className="text-3xl font-bold text-gray-900 mb-2">{state.title}</h1>
				<p className="text-gray-500 mb-6">{state.date}</p>

				<div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{state.content}</div>
			</article>
		</div>
	);
};
