import { Observable } from 'rxjs';

export interface Productos {
    id?: string;
    name: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    categoria: string;
    imagenUrl: string;
    oferta: boolean;
    email: string;
    pedido: boolean;
    roles: string;
}