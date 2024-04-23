import { Animal } from '../../animal/model/animal';
import { Estado } from './../../miscelaneo/model/estado';

export class SolicitudA {constructor(
    public id:number,
    public solicitante: any,
    public estado: Estado,
    public fechaCreacion: Date,
    public sucursal: any,
    public fechaModificacion: Date,
    public status: boolean
){}
}

export class ProcesoA {constructor(
    public id:number,
    public solicitud: SolicitudA,
    public animal: Animal,
    public estado: Estado,
    public fechaInicio: Date,
    public fechaModificacion: Date,
    public status: boolean
){}
}

export class PostProcesoA {constructor(
    public id:number,
    public adopcion: ProcesoA,
    public estado: Estado,
    public fechaInicio: Date,
    public fechaModificacion: Date,
    public status: boolean
){}
}