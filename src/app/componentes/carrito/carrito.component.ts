import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { AutorizacionService } from 'src/app/servicios/login/autorizacion.service'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [AutorizacionService],
})
export class CarritoComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;
  producto = {} as Productos;

  public user$: Observable<any> = this.authSvc.afAuth.user;

  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  
  total: number;

  constructor(public productosService: ProductosService, private authSvc: AutorizacionService, private toastr: ToastrService) {
    this.total = 0;
  }

  ngOnInit() {
    this.productosService.getPedidos().subscribe(productos => {
      this.productos = productos;

      productos.forEach(producto => {
        if (producto.email=="bryanfajardo512@gmail.com") {
          this.montoTotal(producto.cantidad,producto.precio);
        }
        
      });

      console.log(this.total);
    });
    this.initConfig();

  }

  montoTotal(cantidad:number, precio:number ):number{
    
    this.total += cantidad * precio;

    return this.total;
  }

  borrarPedidos(event, productos) {
    if(confirm('¿Estas seguro?')){
      this.productosService.borrarPedidos(productos);
      this.toastr.error('Pedido borrado exitosamente', 'Alerta');
    }
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
      this.toastr.success('Pago realizado exitosamente', 'Alerta');
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }


}
