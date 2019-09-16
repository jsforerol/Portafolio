import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProductos } from '../Interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {
  productos: InfoProductos[] = [];
  cargando = true;
  constructor( private http: HttpClient) {
    this.cargarProductos();

   }
  private cargarProductos() {
    this.http.get('https://angular-html-25885.firebaseio.com/productos_idx.json')
    .subscribe ( (resp: InfoProductos[]) => {
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;
      }, 1000);

      console.log ( resp );

    });

  }

}
