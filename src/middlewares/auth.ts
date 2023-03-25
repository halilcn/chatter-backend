import { NextFunction, Request, Response } from 'express';
import Consultant from '../models/consultant';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    next();
    return;
  }

  const consultant = (
    await Consultant.findOne({
      tokens: {
        $all: [authToken]
      }
    })
  )?.toJSON();

  // TODO:
  req.auth = consultant;

  next();
};

export default auth;
