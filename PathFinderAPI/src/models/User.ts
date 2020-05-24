import bcrypt from 'bcrypt'
import mongoose, {Schema, Document, Model, model} from 'mongoose';


const userSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (this: IUser, candidatePassword: string) =>  Promise<unknown>
}
userSchema.pre<IUser>("save", async function(this: IUser, next) {
  const user = this;
  if (!user.isModified("password")) {
    return next;
  }
  bcrypt.genSalt(10, (error, salt) => {
    if (error) {
      return next(error);
    }
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        next(error);
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePassword = async function(this: IUser, candidatePassword:string) {
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
export interface IUserModel extends Model<IUser> {
  // here we decalre statics

}
export const User: IUserModel = model<IUser, IUserModel>('test', userSchema);
