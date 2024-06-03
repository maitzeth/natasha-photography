import AppRouter from '@/routes';
import { Suspense } from 'react';
import { Footer } from '@/components';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AppRouter />
      <Footer />
    </Suspense>
  );
}

export default App;
