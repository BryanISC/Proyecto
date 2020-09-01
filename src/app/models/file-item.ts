import { Observable } from 'rxjs';

export class FileItem {
    public name: string;
    public subiendo: boolean;
    public porcentajeSubida: Observable<number>;
    public descargarURL: Observable<string>;

    constructor(public file: File = file) {
        this.name = file.name;
        this.subiendo =false;
    }
}