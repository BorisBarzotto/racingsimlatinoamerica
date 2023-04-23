import { IDtm } from "@/interfaces/dtm"
import { IPiloto, IPilotoWins } from "@/interfaces/piloto";

export const pilotCircuitsWins = function (campeonatos: IDtm[], pilotos: IPiloto[]): IPilotoWins[] {

    const summary: IPilotoWins[] = [];
    let count = 0;

    campeonatos.forEach(campeonato => {
        campeonato.resultados.forEach(resultado => {
            let found = summary.findIndex(x => x.piloto === resultado.Primero);

            if (found > -1) { 
                summary[found].victorias.push(`${resultado.Circuito} ${campeonato.campeonato}`);
            }
            else {
                count = count + 1;
                summary.push({
                    _id: count + 1,
                    piloto: resultado.Primero,
                    pais: pilotos.filter( piloto => piloto.piloto === resultado.Primero)[0].pais || "",
                    victorias: [`${resultado.Circuito} ${campeonato.campeonato}`]
                })
            }
        })
    })
    console.log(summary);
    return summary;
}