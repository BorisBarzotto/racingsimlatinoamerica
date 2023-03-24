import  * as db  from "./db";
import { IPiloto } from '@/interfaces/piloto';
import Piloto from "@/models/Piloto";

export const getAllPilots = async (): Promise <IPiloto[] | null> =>{

    await db.connect();
    const pilotos = await Piloto.find().lean();
    await db.disconnect();

    if(!pilotos){
        return null;
    }

    return JSON.parse( JSON.stringify(pilotos));
}