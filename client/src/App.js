import React, { lazy, Suspense } from 'react';

import Preloader from 'shared/Preloader';
const Chat = lazy(() => import('components/Сhat'));

const App = () => {
	return (
		<div className="app">
			<Suspense fallback={<Preloader />}>
				<Chat />
			</Suspense>
		</div>
	);
};

export default App;
