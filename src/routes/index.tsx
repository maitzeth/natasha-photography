import { useRoutes } from 'react-router-dom';
import { ROUTES } from '@/lib/constants';
import { lazy } from 'react';

const LazyHome = lazy(() => import('@/pages/Home'));

const AppRouter = () => {
  const routing  = useRoutes([
    {
      path: ROUTES.home,
      element: <LazyHome />,
    },
    {
      path: '*',
      element: <div>404</div>
    }
  ]);

  return routing;
};

export default AppRouter;