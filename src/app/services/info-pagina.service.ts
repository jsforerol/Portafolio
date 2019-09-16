import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    // console.log('Servicio de infoPagina Listo');
    this.http.get('assets/Data/data-pagina.json')
    .subscribe ( (resp: InfoPagina) => {
      // console.log(resp);
      // Para llamar un campo en especifico
      // console.log( resp['twitter']);
      this.cargada = true;
      this.info = resp;
      console.log( resp );
    });

  }
}
