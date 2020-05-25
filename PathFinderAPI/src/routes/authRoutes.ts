import * as express from "express";
import jsonwebtoken from 'jsonwebtoken'
import mongoose from 'mongoose';
import {User} from '../models/User'
import { IPayload } from "../middleware/requireAuth";

const router = express.Router();


router.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("in signup")
    const user = new User({ email, password });  
    await user.save();
    const payload: IPayload = {userId:user._id}
    const token = jsonwebtoken.sign(payload, "Token_KEY_GOES_HERE");
    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.massage);
  }
});

router.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).send("Email and Password required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(422).send("Email or Password invalid");
    }
    try {
      await user.comparePassword(password);
    } catch (error) {
      return res.status(422).send("Email or Password invalid");
    }

    const token = jsonwebtoken.sign({ userId: user._id }, "Token_KEY_GOES_HERE");
    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.massage);
  }
});

export default router
