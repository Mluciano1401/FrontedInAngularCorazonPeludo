import { TipoAlmacen } from "../../miscelaneo/model/tipo-almacen";

export class Almacen {constructor(
    public id:number,
    public tipoAlmacen: TipoAlmacen,
    public capacidad: number,
    public sucursal: any,
    public fechaModificacion: Date,
    public status: boolean
){}
}
