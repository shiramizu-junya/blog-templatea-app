// src/components/Contact.jsx
export const Contact = () => {
	return (
		<div className="bg-white rounded-lg shadow p-6">
			<h1 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
			<form className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
					<input
						type="text"
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">メッセージ</label>
					<textarea
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
				>
					送信
				</button>
			</form>
		</div>
	);
};
