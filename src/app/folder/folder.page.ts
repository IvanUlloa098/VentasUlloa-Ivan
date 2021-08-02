import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  productos: any

  constructor(private auth: AngularFireAuth, private activatedRoute: ActivatedRoute, private router: Router, private productosService: ProductosService) { }

  ngOnInit() {
    console.log(this.auth.user)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.productos = this.productosService.getProductos();
  }

  show(producto:any) {
    let params: NavigationExtras = {
      queryParams: {
        producto:producto
      }
    }

    this.router.navigate(['show'], params)
  }

}
