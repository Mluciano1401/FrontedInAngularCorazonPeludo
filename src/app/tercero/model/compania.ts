export class Compania {constructor(
    public id:number,
    public nombre: string,
    public email: string,
    public RNC: number,
    public fechaModificacion: Date,
    public status: boolean,
    public direccionId: number,
    public tipoEmpresaId: number
){}
}
