import HomePage from './containers/HomePage';
import QuizPage from './containers/QuizPage';

const routes = [
  {
    path: '/',
    exact: true,
    translationId: 'home',
    component: HomePage,
  },
  {
    path: '/html/basic-test',
    exact: true,
    component: QuizPage,
  },
  {
    path: '/css/basic-test',
    exact: true,
    component: QuizPage,
  },
  {
    path: '*',
    exact: true,
    component: HomePage,
  },
];

export default routes;
