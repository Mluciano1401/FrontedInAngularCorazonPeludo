import { Especie } from "../../miscelaneo/model/especie";
import { Origen } from "../../miscelaneo/model/origen";
import { TipoAmputacion } from "../../miscelaneo/model/tipo-amputacion";
import { TipoPiel } from "../../miscelaneo/model/tipo-piel";

export class Animal {constructor(
    public id:number,
    public alias: string,
    public identificador: any,
    public especie: Especie,
    public rasgosFisicos: RasgosFisicos,
    public sexo: string,
    public edad: number,
    public altura: number,
    public peso: number,
    public estado: any,
    public fechaIngreso: Date,
    public origen: Origen,
    public foto: string,
    public fechaModificacion: Date,
    public status: boolean
){}
}

export class RasgosFisicos{
    constructor(
        public id:number,
        public color: string,
        public amputaciones: boolean,
        public tipoAmputacion: TipoAmputacion,
        public tipoPiel: TipoPiel,
        public fechaModificacion: Date,
        public status: boolean
    ){}
}

export class Identificador{
    constructor(
        public id:number,
        public codigoBarra: string,
        public tipoIdentificador: string,
        public fechaModificacion: Date,
        public status: boolean
    ){}
}