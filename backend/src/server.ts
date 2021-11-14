import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

require('dotenv').config();
import './database/connection';

import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server listen port: ${port}`);
});
