import bcrypt from "bcrypt";
import mongoose, { Schema, Document, Model, model } from "mongoose";

const userSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);
export interface IUser {
  name: string;
  password: string;
}
export interface UserDocument extends Document, IUser {
  email: string;
  password: string;
  comparePassword: (this: IUser, candidatePassword: string) => Promise<unknown>;
}
userSchema.pre<UserDocument>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});
userSchema.methods.comparePassword = async function (
  this: IUser,
  candidatePassword: string
) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (error, isMatch) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};
export interface IUserModel extends Model<UserDocument> {
  // here we decalre statics
}
export const User: IUserModel = model<UserDocument, IUserModel>(
  "users",
  userSchema
);
