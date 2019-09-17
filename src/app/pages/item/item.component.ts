import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductosService } from '../../services/info-productos.service';
import { InfoProductoDescripcion } from 'src/app/Interfaces/info-producto_descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: InfoProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               private infoProductosService: InfoProductosService) { }

  ngOnInit() {
      this.route.params
      .subscribe( parametros => {
        this.infoProductosService.getProducto(parametros['id'])
        .subscribe( (producto: InfoProductoDescripcion) => {
          this.producto = producto;
          this.id = parametros['id'];
        });
      });

  }

}
