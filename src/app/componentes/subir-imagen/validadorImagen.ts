import { FileItem } from "../../models/file-item";

export class validarImagen {
    private acceptType =['image/jpg', 'image/png'];

    validateType(fileType:string):boolean{
        return fileType === '' || fileType === undefined 
        ? false
        : this.acceptType.includes(fileType); 
    }

    checkDropped(fileName:string, files: FileItem[]): boolean {
        for(const file of files) {
            if(file.name === fileName){
                return true;
            }
        }
        return false;
    }
}