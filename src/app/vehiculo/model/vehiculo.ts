export class Vehiculo {constructor(
    public id:number,
    public numeroChasis:string,
    public placa:string,
    public es4x4:number,
    public anho:number,
    public kilometrajeMaximo:number,
    public capacidadPasajeros:number,
    public capacidadCarga:number,
    public color:string,
    public fechaModificacion: Date,
    public status: boolean,
    public tipoVehiculoTipoVehiculoId: number,
    public tipoCombustibleTipoCombustibleId: number
){}
}
