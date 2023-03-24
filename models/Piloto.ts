import mongoose, { Schema, model, Model } from 'mongoose';
import { IPiloto } from '@/interfaces/piloto';

const PilotoSchema = new Schema({
  _id: { type: String },
  piloto: { type: String },
  pais: { type: String },
})

const Piloto: Model<IPiloto> = mongoose.models.Piloto || model('Piloto', PilotoSchema);

export default Piloto;