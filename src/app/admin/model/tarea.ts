import { Complejidad } from "../../miscelaneo/model/complejidad";
import { TipoTarea } from "../../miscelaneo/model/tipo-tarea";

export class Tarea {constructor(
    public id: number,
    public descripcion: string,
    public tipoTarea: TipoTarea,
    public complejidad: Complejidad,
    public fechaModificaion: Date,
    public status: boolean
){}
}
