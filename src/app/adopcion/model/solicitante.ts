import { ActividadEconomica } from "../../miscelaneo/model/actividad-economica";

export class Solicitante {constructor(
    public id: number,
    public persona: any,
    public situacionfamiliar: string,
    public ingresosMensuales: number,
    public actividadEconomia: ActividadEconomica,
    public dependecia: boolean,
    public numeroDependientes: number,
    public fechaModificacion: Date,
    public status: boolean
){}
}
