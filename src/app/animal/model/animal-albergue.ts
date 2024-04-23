import { Almacen } from "../../almacen/model/almacen";
import { Estado } from "../../miscelaneo/model/estado";
import { Animal } from "./animal";

export class AnimalAlbergue {constructor(
    public id:number,
    public jaula:string,
    public animal: Animal,
    public almacen: Almacen,
    public estado: Estado,
    public fechaEntrada: Date,
    public fechaSalida: Date,
    public fechaModificacion: Date,
    public status: boolean
){}
}
