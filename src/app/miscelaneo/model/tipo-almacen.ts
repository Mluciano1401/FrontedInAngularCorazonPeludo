export class TipoAlmacen {
    constructor(
        public id:number,
        public descripcion:string,
        public fechaModificacion: Date,
        public status: boolean
    ){}
}
