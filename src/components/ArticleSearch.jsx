import { useSearchParams } from 'react-router-dom';

export const ArticleSearch = ({ categories }) => {
	// useSearchParams: クエリパラメータを読み書きするためのフック
	// URLの ?category=React&search=hooks のような部分を扱う
	const [searchParams, setSearchParams] = useSearchParams();

	// クエリパラメータから値を取得（なければ空文字）
	const categoryFilter = searchParams.get('category') || '';
	const searchQuery = searchParams.get('search') || '';
	const statusFilter = searchParams.get('status') || '';

	// フィルター変更時のハンドラー
	const handleFilterChange = (key, value) => {
		const newParams = new URLSearchParams(searchParams);
		if (value) {
			newParams.set(key, value);
		} else {
			newParams.delete(key);
		}
		setSearchParams(newParams);
	};

	// フィルターをクリア
	const clearFilters = () => {
		setSearchParams(new URLSearchParams());
	};

	return (
		<div className="bg-white rounded-lg shadow p-4 mb-6">
			<h2 className="text-sm font-semibold text-gray-700 mb-3">🔍 検索</h2>
			<div className="flex flex-wrap gap-4 items-end">
				{/* 検索入力 */}
				<div className="flex-1 min-w-48">
					<label className="block text-xs text-gray-500 mb-1">タイトル検索</label>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => handleFilterChange('search', e.target.value)}
						placeholder="検索..."
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* カテゴリ選択 */}
				<div>
					<label className="block text-xs text-gray-500 mb-1">カテゴリ</label>
					<select
						value={categoryFilter}
						onChange={(e) => handleFilterChange('category', e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">すべて</option>
						{categories.map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
					</select>
				</div>

				{/* ステータス選択 */}
				<div>
					<label className="block text-xs text-gray-500 mb-1">ステータス</label>
					<select
						value={statusFilter}
						onChange={(e) => handleFilterChange('status', e.target.value)}
						className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">すべて</option>
						<option value="公開">公開</option>
						<option value="下書き">下書き</option>
					</select>
				</div>

				{/* クリアボタン */}
				<button
					onClick={clearFilters}
					className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
				>
					クリア
				</button>
			</div>
		</div>
	);
};
