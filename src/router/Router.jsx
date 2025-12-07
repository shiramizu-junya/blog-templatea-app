import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../components/Home';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { articlesRoutes } from './articlesRoutes';

export const Router = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<BrowserRouter>
				<nav className="bg-white shadow-sm">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex space-x-8">
								<Link
									to="/"
									className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors"
								>
									ホーム
								</Link>
								<Link
									to="/articles"
									className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors"
								>
									記事管理
								</Link>
								<Link
									to="/contact"
									className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors"
								>
									お問い合わせ
								</Link>
							</div>
						</div>
					</div>
				</nav>

				<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/articles" element={<Articles />}>
							{/* Articlesの中にネストされたルート */}
							{articlesRoutes.map(({ path, element }) => (
								<Route key={path} path={path} element={element} />
							))}
						</Route>
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
};
