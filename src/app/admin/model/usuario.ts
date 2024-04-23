import { TipoUsuario } from "../../miscelaneo/model/tipo-usuario";

export class Usuario {constructor(
    public id:number,
    public username: string,
    public password: string,
    public email: string,
    public foto: string,
    public tipoUsuario: TipoUsuario,
    public sucursal: any,
    public fechaModificacion: Date,
    public status: boolean
){}
}

export class UsuarioLog{
    constructor(
        public username: string,
        public password: string){}
}