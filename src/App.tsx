import AppRouter from '@/routes';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
