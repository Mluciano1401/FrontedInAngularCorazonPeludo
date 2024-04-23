import { TipoPersona } from "../../miscelaneo/model/tipo-persona";

export class Empleado {constructor(
    public id:number,
    public sueldo:number,
    public fechaIngreso: Date,
    public fechaModificacion: Date,
    public status: boolean,
    public personaPersonaId: number,
    public tipoEmpleadoTipoEmpleadoId: number,
    public puesto: string,
){}
}
