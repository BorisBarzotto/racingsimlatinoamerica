import { IDtm, ITable } from "@/interfaces/dtm"
import { IPiloto } from "@/interfaces/piloto";

export const createSummary = function (campeonatos: IDtm[], pilotos:IPiloto[]): ITable[] {

    const summary: ITable[] = [];
    let count = 0;

    campeonatos.forEach(campeonato => {
        campeonato.resultados.forEach(resultado => {
            let found = summary.findIndex(x => x.piloto === resultado.Primero);

            if (found > -1) { 
                summary[found].primero = summary[found].primero + 1;
                summary[found].podios = summary[found].podios + 1;
            }
            else {
                count = count + 1;
                summary.push({
                    key: count + 1,
                    piloto: resultado.Primero,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.Primero)[0].pais || "",
                    primero: 1,
                    segundo: 0,
                    tercero: 0,
                    podios: 1,
                    pp: 0,
                    vr: 0,
                })
            }
            
            found = summary.findIndex(x => x.piloto === resultado.Segundo);
            if (found > -1) { 
                summary[found].segundo = summary[found].segundo + 1;
                summary[found].podios = summary[found].podios + 1;
             }
            else {
                count = count + 1;
                summary.push({
                    key: count + 1,
                    piloto: resultado.Segundo,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.Segundo)[0]?.pais || "",
                    primero: 0,
                    segundo: 1,
                    tercero: 0,
                    podios: 1,
                    pp: 0,
                    vr: 0,
                })
            }

            found = summary.findIndex(x => x.piloto === resultado.Tercero);
            if (found > -1) { 
                summary[found].tercero = summary[found].tercero + 1;
                summary[found].podios = summary[found].podios + 1; }
            else {
                count = count + 1;
                summary.push({
                    key: count + 1,
                    piloto: resultado.Tercero,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.Tercero)[0].pais || "",
                    primero: 0,
                    segundo: 0,
                    tercero: 1,
                    podios: 1,
                    pp: 0,
                    vr: 0,
                })
            }

            found = summary.findIndex(x => x.piloto === resultado.PP);
            if (found > -1) { 
                summary[found].pp = summary[found].pp + 1 }
            else {
                count = count + 1;
                summary.push({
                    key: count + 1,
                    piloto: resultado.PP,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.PP)[0].pais || "",
                    primero: 0,
                    segundo: 0,
                    tercero: 0,
                    podios: 0,
                    pp: 1,
                    vr: 0,
                })
            }

            found = summary.findIndex(x => x.piloto === resultado.VR);
            if (found > -1) { 
                summary[found].vr = summary[found].vr + 1 }
            else {
                count = count + 1;
                summary.push({
                    key: count + 1,
                    piloto: resultado.VR,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.VR)[0].pais || "",
                    primero: 0,
                    segundo: 0,
                    tercero: 0,
                    podios: 0,
                    pp: 0,
                    vr: 1,
                })
            }
        })
    })
   
    return summary.sort((a,b) => {
        if(a.primero === b.primero)
            {   
                if(b.segundo === a.segundo){
                    return b.tercero - a.tercero;
                }
                else {
                    return b.segundo - a.segundo;
                }
            }
        else{
                return b.primero - a.primero 
            }
    });
};