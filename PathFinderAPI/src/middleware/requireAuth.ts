import jsonwebtoken from 'jsonwebtoken'

import {User} from '../models/User'
import {Request, Response} from 'express'
export interface IPayload{
  userId:string
}
export default (req: Request, res: Response, next:any) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }
  const token = authorization.replace("Bearer ", "");
  jsonwebtoken.verify(token, "Token_KEY_GOES_HERE", async (error, payload: object| undefined ) => {
    if (error) {
      return res.status(401).send({ error: "You must be logged in." });
    }
    const { userId } = payload as IPayload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
