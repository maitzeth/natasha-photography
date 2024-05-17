import AppRouter from '@/routes';
import { Progressbar } from '@/components';
import { Suspense } from 'react';
import { Footer } from '@/components';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Progressbar />
      <AppRouter />
      <Footer />
    </Suspense>
  );
}

export default App;
