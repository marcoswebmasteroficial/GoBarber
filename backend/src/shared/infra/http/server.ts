import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

import { errors } from 'celebrate';
import 'express-async-errors';
import 'reflect-metadata';
import uploadConfig from '@config/upload';
import routes from '@shared/infra/http/routes';
import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';
import AppError from '@shared/errors/AppError';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
  console.error(err);
});
app.listen(3333, () => console.log('🚀 Server started on port 3333!'));