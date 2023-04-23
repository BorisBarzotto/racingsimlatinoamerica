
export interface IPiloto {

    _id: string;
    piloto: string;
    pais: string;
   
}

export interface IPilotoWins {

    _id: number;
    piloto: string;
    pais: string;
    victorias: string[];
   
}