import { TipoAlimento } from "../../miscelaneo/model/tipo-alimento";

export class Alimento {constructor(
    public id:number,
    public descripcion: string,
    public contenido: number,
    public unidadMedida: string,
    public tipoAlimento: TipoAlimento,
    public fechaModificacion: Date,
    public status: boolean
){}
}
