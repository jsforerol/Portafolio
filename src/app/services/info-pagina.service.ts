import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../Interfaces/info-pagina.interface';
import { InfoEquipo } from '../Interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];
  // equipo: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }


    private cargarInfo() {
      this.http.get('assets/Data/data-pagina.json')
      .subscribe ( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log( resp );
      });
    }

    private cargarEquipo() {
      this.http.get('https://angular-html-25885.firebaseio.com/equipo.json')
      .subscribe((resp: InfoEquipo[]) => {
        this.cargada = true;
        this.equipo = resp;
        // console.log( resp );
      });

    }
}
