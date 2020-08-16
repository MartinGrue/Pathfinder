const mongoose = require("mongoose");
import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import trackRoutes from "./routes/trackRoutes";
import { UserDocument } from "./models/User";
import { IUser } from "./models/User";
const app = express();
declare module "express-serve-static-core" {
  interface Request {
    user: UserDocument | null;
  }
}
const hostname = "127.0.0.1";
const port = 3000;

const mongoConnectionString = "mongodb://localhost:27017";
mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (error: any) => {
  console.error(error);
});
// app.get('/', (req, res) => {
//   res.send(`Your email:`);
// });
// app.get('/bli', (req, res) => {
//   res.send(`Your email:`);
// });
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
app.listen(port, () => {
  console.log("Im listening");
});
