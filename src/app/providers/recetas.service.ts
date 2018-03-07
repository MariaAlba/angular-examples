import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';

@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCK_RECETA);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero);
       receta.id = el.id;
       receta.ingredientes = el.ingredientes;
       receta.imagen = el.foto;
       receta.likes = el.likes;
       receta.cocinero = el.cocinero;
       receta.descripcion = el.descripcion;
       receta.isGlutenFree = el.isGlutenFree;

       this.recetas.push(receta);
    });

    return this.recetas;
  }

}
