import mongoose, {Schema, Document, Model, model} from 'mongoose';

export interface IPoint extends Document {
  email: string;
  password: string;
}export interface ITrack extends Document {
  email: string;
  password: string;
}
const pointSchema:Schema = new mongoose.Schema({
  timestamp: Number,
  cords: {
    latitude: Number,
    longitude: Number,
    altitude:Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});

const trackSchema = new mongoose.Schema<ITrack>({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      default: ''
    },
    locations: [pointSchema]
  });

export interface ITrackModel extends Model<ITrack> {
    // here we decalre statics
  
}
export const Track:ITrackModel = model<ITrack, ITrackModel>("Track", trackSchema);

