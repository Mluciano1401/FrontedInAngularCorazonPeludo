import { Compania } from "./compania";

export class Sucursal {constructor(
    public id:number,
    public descripcion: string,
    public fechaModificacion: Date,
    public status: boolean,
    public companiaPersonalId: number
){}
}

