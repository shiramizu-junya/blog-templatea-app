import { articlesData } from '../data/articleData';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-gray-900">記事一覧</h1>
			</div>

			<div className="overflow-x-auto">
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
						{articlesData.map((article) => (
							<tr key={article.id} className="hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.id}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									{/* 動的にidを含めたリンク */}
									<Link
										to={`/articles/detail/${article.id}`}
										className="text-gray-900 hover:text-slate-700 hover:underline underline-offset-4 transition-colors"
									>
										{article.title}
									</Link>
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
