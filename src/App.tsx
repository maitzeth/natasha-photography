import AppRouter from '@/routes';
import { Progressbar } from '@/components';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Progressbar />
      <AppRouter />
    </Suspense>
  );
}

export default App;
