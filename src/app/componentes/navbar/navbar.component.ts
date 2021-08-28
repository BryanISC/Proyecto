import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AutorizacionService],
})
export class NavbarComponent{

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;

  producto = {} as Productos;

  public menu = true;
  public usuario = true;

  public user$: Observable<any> = this.authSvc.afAuth.user;

  isAdmin: boolean;
  emailLogged: any;
  emailRol: any;
  user: any;

  constructor(public authSvc: AutorizacionService, private router: Router, public productosService: ProductosService) {
    this.user$.subscribe(user => {
      this.emailLogged = user.email;
      console.log(this.emailLogged);
    });

    this.productosService.getEmail().subscribe(prod => {
      this.emailRol = prod.find(p => p.email == this.emailLogged);

      sessionStorage.setItem("user", this.emailRol);
      this.user = sessionStorage.getItem('user');
      
      if (this.emailRol.email == "bryanfajardo512@gmail.com") {
        this.isAdmin = true;
        console.log(this.isAdmin);
      } 
    });    
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.productosService.getEmail().subscribe(productos => {
      this.productos = productos;
    });
  }
}

