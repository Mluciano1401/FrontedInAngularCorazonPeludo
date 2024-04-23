import { TipoEnfermedad } from './../../miscelaneo/model/tipo-enfermedad';
export class Enfermedad {constructor(
    public id:number,
    public nombre: string,
    public TipoEnfermedad: TipoEnfermedad,
    public prevalencia: string,
    public porcientoMortalidad: number,
    public fechaModificacion: Date,
    public status: boolean
){}
}
