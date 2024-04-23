export class Donacion {constructor(
    public id:number,
    public fecha:Date,
    public fechaModificacion: Date,
    public status: boolean,
    public donadorPersonaId: number,
    public tipoDonacionId: number
){}
}
 