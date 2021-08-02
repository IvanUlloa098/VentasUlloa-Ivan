import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../domain/item';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public afs: AngularFirestore) { }

  getProductos(): Observable<any[]> {
    return this.afs.collection("productos").valueChanges();
  }

  getCarro(): Observable<any[]> {
    return this.afs.collection("carro",
      ref => ref.where("activo", "==", true)
      .where("usuario", "==", "testing")
    ).valueChanges();
  }

  saveUser(persona: Persona) {
    const refContactos = this.afs.collection("usuarios") 

    if(persona.id == null) {
      persona.id = this.afs.createId()
      persona.activo = true
    }

    refContactos.doc(persona.id).set(Object.assign({}, persona))
  }

  saveCarro(item: Item) {
    const refContactos = this.afs.collection("carro") 

    if(item.id == null) {
      item.id = this.afs.createId()
    }

    refContactos.doc(item.id).set(Object.assign({}, item))
  }

}
