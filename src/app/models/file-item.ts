import { Observable } from 'rxjs';

export class FileItem {
    public name: string;
    public subiendo: false;
    public porcentajeSubida: Observable<number>;
    public descargarURL: Observable<string>;

    constructor(public file: File = file) {
        this.name = file.name;
    
    }
}