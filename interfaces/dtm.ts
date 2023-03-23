export interface IDtm {
    _id: string;
    campeonato: number,
    resultados: IDtmRace[]
}

export interface IDtmRace {

    Carrera:  number;
    Circuito: string;
    PP:       string;
    VR:       string;
    Primero:  string;
    Segundo:  string;
    Tercero:  string;
    
}

export interface ITable {

    key: number;
    piloto:  string;
    primero: number;
    segundo: number;
    tercero: number;
    podios:  number;
    pp:  number;
    vr:  number;
    
}