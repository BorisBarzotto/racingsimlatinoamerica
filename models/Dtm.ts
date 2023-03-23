import mongoose, { Schema, model, Model } from 'mongoose';
import { IDtm } from '@/interfaces/dtm';

const CampeonatoSchema = new Schema({
  Carrera: { type: Number },
  Circuito: { type: String },
  PP: { type: String },
  VR: { type: String },
  Primero: { type: String },
  Segundo: { type: String },
  Tercero: { type: String },
})

const DtmSchema = new Schema({

  _id: String,
  campeonato: { type: Number, required: true },
  resultados: [{ type: CampeonatoSchema }]

})

const Dtm: Model<IDtm> = mongoose.models.Dtm || model('Dtm', DtmSchema);

export default Dtm;