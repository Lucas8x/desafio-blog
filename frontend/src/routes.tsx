import { Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';

export const AppRoutes = () => (
  <>
    <Route exact path='/' component={Home} />
    <Route path='/post/new' component={NewPost} />
  </>
);
