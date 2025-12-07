import { articlesData } from '../data/articleData';
import { Link, useSearchParams } from 'react-router-dom';
import { ArticleSearch } from './ArticleSearch';

export const ArticleList = () => {
	const [searchParams] = useSearchParams();

	const categoryFilter = searchParams.get('category') || '';
	const searchQuery = searchParams.get('search') || '';
	const statusFilter = searchParams.get('status') || '';

	const categories = [...new Set(articlesData.map((article) => article.category))];

	const filteredArticles = articlesData.filter((article) => {
		const matchesCategory = categoryFilter === '' || article.category === categoryFilter;
		const matchesSearch =
			searchQuery === '' || article.title.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesStatus = statusFilter === '' || article.status === statusFilter;
		return matchesCategory && matchesSearch && matchesStatus;
	});

	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-gray-900">記事一覧</h1>
			</div>

			<ArticleSearch categories={categories} />

			<div className="overflow-x-auto">
				<p className="text-sm text-gray-600 mb-2">検索結果: {filteredArticles.length}件</p>
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								タイトル
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								カテゴリ
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								公開日
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								ステータス
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								操作
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredArticles.map((article) => (
							<tr key={article.id} className="hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.id}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<Link
										to={`/articles/detail/${article.id}`}
										state={article} // 記事データをstateとして渡す
										className="text-gray-900 hover:text-slate-700 hover:underline underline-offset-4 transition-colors"
									>
										{article.title}
									</Link>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{article.category}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{article.date}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`px-2 py-1 text-xs font-medium rounded ${
											article.status === '公開'
												? 'bg-green-100 text-green-800'
												: 'bg-yellow-100 text-yellow-800'
										}`}
									>
										{article.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<button className="text-blue-600 hover:text-blue-700 mr-3">編集</button>
									<button className="text-red-600 hover:text-red-700">削除</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
