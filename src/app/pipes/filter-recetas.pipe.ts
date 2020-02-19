import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({name: 'filterRecetas'})
export class FilterRecetas implements PipeTransform {

  transform(recetas: Receta[], searchText: string, isGlutenFree: boolean ): Receta[] {

    //si no hay recetas retornar vacio
    if (!recetas) return [];

    let recetasFilterArray: Receta[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetasFilterArray = recetas.filter( (receta) => receta.isGlutenFree );
    } else {
      recetasFilterArray = recetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = [];
      return recetasFilterArray.filter(it => {
        // Generamos un array de los terminos que se pueden buscar
        receta = [it.nombre, ...it.ingredientes, it.cocinero];
        // Buscamos dentro de ese array algún termino que contenga el searchString
        return receta.some((it => it.toLowerCase().includes(searchText)));
      });
    }
  }

}
