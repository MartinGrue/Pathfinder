import requireAuth from '../middleware/requireAuth'

import * as express from "express";
import jsonwebtoken from 'jsonwebtoken'
import mongoose from 'mongoose';
import {User} from '../models/User'

import {Track} from '../models/Track'
const router = express.Router();

router.use(requireAuth);

router.get("/api/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user!._id });
  res.send(tracks);
});

router.post("/api/tracks", async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide a name and locations" });
  }

  try {
    const track = new Track({ name, locations, userId: req.user!._id });

    await track.save();
    res.send(track);
  } catch (error) {
    res.status(422).send({ error: error.massage });
  }
});
export default router;