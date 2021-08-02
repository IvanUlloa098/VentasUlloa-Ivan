import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { Item } from 'src/app/domain/item';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  producto: any
  item: Item = new Item()

  constructor(private activate: ActivatedRoute, private router: Router, private productosService: ProductosService) { 
    activate.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.producto = this.router.getCurrentNavigation().extras.queryParams.producto
      }
    })
  }

  ngOnInit() {
  }

  agregar() {
    this.item.id_item = this.producto.id
    this.item.nombre = this.producto.nombre
    this.item.usuario = 'testing'
    this.item.activo = true

    this.productosService.saveCarro(this.item)

    this.router.navigate(['folder/inbox'])
  }

}
