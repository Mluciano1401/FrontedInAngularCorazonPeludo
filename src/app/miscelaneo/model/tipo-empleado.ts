export class TipoEmpleado {
    constructor(
        public id:number,
        public descripcion:string,
        public fechaModificacion: Date,
        public status: boolean
    ){}
}
