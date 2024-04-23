import { Estado } from "../../miscelaneo/model/estado";
import { EstadoLugar } from "../../miscelaneo/model/estado-lugar";
import { NivelUrgencia } from "../../miscelaneo/model/nivel-urgencia";

export class Rescate {constructor(
    public id:number,
    public reminente: any,
    public estado: Estado,
    public fechaCreacion: Date,
    public sucursal: any,
    public nivelUrgencia: NivelUrgencia,
    public ubicacion: any,
    public estadoLugar: EstadoLugar,
    public fechaModificacion: Date,
    public status: boolean
){}
}
