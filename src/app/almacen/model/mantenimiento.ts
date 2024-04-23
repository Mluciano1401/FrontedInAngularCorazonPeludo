import { TipoMantenimiento } from "../../miscelaneo/model/tipo-mantenimiento";

export class Mantenimiento {constructor(
    public id:number,
    public descripcion: string,
    public tipoMantenimiento: TipoMantenimiento,
    public fechaModificacion: Date,
    public status: boolean
){}
}
