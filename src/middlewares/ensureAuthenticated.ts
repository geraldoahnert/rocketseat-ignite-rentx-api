import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing.');
  }

  // [0]    [1]
  // Bearer 929kda9d2kad9akd292dk9adakdsoad
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, 'batatasecreta');
    console.log(decoded);
  } catch {
    throw new Error('Invalid token!');
  }
}
