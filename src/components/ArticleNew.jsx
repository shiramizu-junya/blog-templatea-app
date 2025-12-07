import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articlesData } from '../data/articleData';

export const ArticleNew = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('');
	const [status, setStatus] = useState('下書き');
	const [date, setDate] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// 保存処理
		articlesData.push({
			id: Math.floor(Math.random() * 1000),
			title,
			content,
			category,
			status,
			date,
		});
		// 保存後、一覧ページに遷移
		navigate('/articles/list');
	};

	return (
		<div>
			<h1 className="text-2xl font-bold text-gray-900 mb-6">記事作成</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">タイトル</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="記事のタイトルを入力"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ</label>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="">選択してください</option>
							<option value="React">React</option>
							<option value="TypeScript">TypeScript</option>
							<option value="Next.js">Next.js</option>
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="下書き">下書き</option>
							<option value="公開">公開</option>
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">公開日</label>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">本文</label>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						required
						rows={10}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="記事の本文を入力"
					/>
				</div>

				<div className="flex gap-3">
					<button
						type="submit"
						className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
					>
						保存
					</button>
					<button
						type="button"
						onClick={() => navigate('/articles/list')}
						className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
					>
						キャンセル
					</button>
				</div>
			</form>
		</div>
	);
};
