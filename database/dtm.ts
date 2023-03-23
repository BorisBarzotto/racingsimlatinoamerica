import { IDtm } from '@/interfaces/dtm';
import  * as db  from "./db";
import  Dtm  from "../models/Dtm"

export const getDtmHistorical = async (): Promise <IDtm[] | null> =>{

    await db.connect();
    const dtm = await Dtm.find().lean();
    await db.disconnect();

    if(!dtm){
        return null;
    }

    return JSON.parse( JSON.stringify(dtm));
}
