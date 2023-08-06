import MainLayout from '@layouts/MainLayout';

// import Home from '@pages/Home';
import Advice from '@pages/Advice';
import NotFound from '@pages/NotFound';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   layout: MainLayout,
  // },
  {
    path: '/',
    name: 'Advice',
    component: Advice,
    // layout: MainLayout,
  },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout },
];

export default routes;
