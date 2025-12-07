import { Link, Outlet, useLocation } from 'react-router-dom';

export const Articles = () => {
	const location = useLocation();

	// 現在のパスに応じてアクティブなリンクをハイライト
	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<div className="flex gap-6">
			{/* サイドバー（常に表示） */}
			<aside className="w-64 bg-white rounded-lg shadow p-4">
				<h2 className="text-lg font-bold text-gray-900 mb-4">記事管理</h2>
				<nav className="space-y-2">
					<Link
						to="/articles/list"
						className={`block px-4 py-2 rounded-md transition-colors ${
							isActive('/articles/list')
								? 'bg-blue-600 text-white'
								: 'text-gray-700 hover:bg-gray-100'
						}`}
					>
						📄 記事一覧
					</Link>
					<Link
						to="/articles/new"
						className={`block px-4 py-2 rounded-md transition-colors ${
							isActive('/articles/new')
								? 'bg-blue-600 text-white'
								: 'text-gray-700 hover:bg-gray-100'
						}`}
					>
						✏️ 記事作成
					</Link>
				</nav>

				<div className="mt-6 pt-6 border-t border-gray-200">
					<h3 className="text-sm font-semibold text-gray-900 mb-2">統計情報</h3>
					<div className="space-y-2 text-sm text-gray-600">
						<p>
							総記事数: <span className="font-semibold text-gray-900">24</span>
						</p>
						<p>
							公開中: <span className="font-semibold text-green-600">18</span>
						</p>
						<p>
							下書き: <span className="font-semibold text-yellow-600">6</span>
						</p>
					</div>
				</div>
			</aside>

			{/* メインコンテンツ（ここに子ルートが表示される） */}
			<div className="flex-1 bg-white rounded-lg shadow p-6">
				<Outlet />
			</div>
		</div>
	);
};
