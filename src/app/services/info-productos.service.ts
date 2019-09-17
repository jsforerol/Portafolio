import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProductos } from '../Interfaces/info-productos.interface';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {
  productos: InfoProductos[] = [];
  productoFiltrados: InfoProductos[] = [];
  cargando = true;
  constructor( private http: HttpClient) {
    this.cargarProductos();

   }
  private cargarProductos() {

      return new Promise( ( resolve, reject ) => {
        this.http.get('https://angular-html-25885.firebaseio.com/productos_idx.json')
        .subscribe ( (resp: InfoProductos[]) => {
          this.cargando = false;
          this.productos = resp;
          resolve();
          // console.log ( resp );
      });
    });

  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-25885.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string) {

    if ( this.productos.length === 0 ) {
        // cargar productos
        this.cargarProductos().then( () => {
          // Ejecutar despues de tener productos
          // Aplicar filtro
          this.filtrarProducto( termino );
        });
    } else {
        // aplicar filtros
      this.filtrarProducto( termino );
    }


  }

  private filtrarProducto( termino: string ) {
    /*Primara logica para mostrar los datos filtrados
      this.productoFiltrados.filter( producto => {
      return true;
     });*/
     this.productoFiltrados = [];
     termino = termino.toLowerCase();

     this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
              this.productoFiltrados.push( prod );
        }
     })

  // console.log( this.productos );

  }

}
