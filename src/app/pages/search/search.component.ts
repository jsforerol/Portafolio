import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public infoProductosService: InfoProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( params => {
          console.log(params['termino']);
          this.infoProductosService.buscarProducto(params['termino']);

      });
  }

}
