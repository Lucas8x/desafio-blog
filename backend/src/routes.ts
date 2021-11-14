import { Router } from 'express';

import PostsController from './controllers/PostsController';

const routes = Router();

routes
  .get('/posts', PostsController.index)
  .get('/posts/:id', PostsController.show)
  .post('/posts', PostsController.create)
  .put('/posts/:id', PostsController.update)
  .delete('/posts/:id', PostsController.delete);

export { routes };
