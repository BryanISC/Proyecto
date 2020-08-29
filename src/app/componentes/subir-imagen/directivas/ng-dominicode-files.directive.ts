import { Directive, Input, Output, EventEmitter, Host, HostListener } from '@angular/core';
import { FileItem } from '../../../models/file-item';
import { validarImagen } from '../validadorImagen';

@Directive({
  selector: '[appNgDominicodeFiles]'
})
export class NgDominicodeFilesDirective extends validarImagen {
  @Input() files: FileItem[] = [];
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();
//Manipular cuando el mouse entra dentro del contenedor.
  @HostListener('dragover', ['$event'])
  onDragEnter(event: any) {
    this.preventAndStop(event);
    this.mouseOver.emit(true);
  }
//Manipular cuando el mouse sale del contenedor.
  @HostListener('dragleave', ['$event'])
  onDragLeave() {
    this.mouseOver.emit(false);
  }
//Manipular cuando el mouse suelta los ficheros.
  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    const dataTransfer = this.getDataTranfer(event);
    if (!dataTransfer) {
      return;
    }

    this.preventAndStop(event);
    this.extractFiles(dataTransfer.files);
    this.mouseOver.emit(false);
  }

//Pasamos el fichero.
  private getDataTranfer(event: any ){
    return event.dataTransfer
    ? event.dataTransfer
    : event.orinalEvent.dataTransfer;
  }
//Extraer el fichero.
  private extractFiles(fileList:FileList): void{
    for(const property in Object.getOwnPropertyNames(fileList)){
      const tempFile = fileList[property];
      if(this.canBeUploaded(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }



  private canBeUploaded(file: File ): boolean {
    if(
      !this.checkDropped(file.name, this.files) && 
      this.validateType(file.type)
    ){
      return true;
    }else{
      return false;
    }
  }
//Prever de que no se habra el navegador cuando se habra algun fichero.
  private preventAndStop(event: any): void {
    event.preventDefault();
    event.StopPropagation();
  }

}
