import { Marca } from "../../miscelaneo/model/marca";
import { TipoProducto } from "../../miscelaneo/model/tipo-producto";

export class Producto {constructor(
    public id:number,
    public nombre: string,
    public lote: string,
    public tipoProducto: TipoProducto,
    public costo: number,
    public marca: Marca,
    public fechaVencimiento: Date,
    public fechaModificacion: Date,
    public status: boolean
){}
}
