
const mongoose = require('mongoose');import express from "express";
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes'
import trackRoutes from './routes/trackRoutes'

import { IUser } from './models/User';
import requireAuth from './middleware/requireAuth';
const app = express();
declare module 'express-serve-static-core' {
  interface Request {
    user: IUser | null 
  }
}
const hostname = '127.0.0.1';
const port = 3000;
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoConnectionString =
  "mongodb+srv://root:root@cluster0-lgncb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (error:any) => {
  console.error(error);
});
app.get('/', (req, res) => {
  res.send(`Your email:`);
});

app.listen(5000, () => {
  console.log("Im listening");
});
