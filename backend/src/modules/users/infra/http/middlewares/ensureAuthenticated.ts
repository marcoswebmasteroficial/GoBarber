import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';
import AuthConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

export default function ensureAuthenticated(
  resquest: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = resquest.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT error', 401);
  }
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, AuthConfig.jwt.secret);
    const { sub } = decoded as { iat: number; exp: number; sub: string };
    request.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('Token invalido', 401);
  }
}
