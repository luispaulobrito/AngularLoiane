import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, filtro: string): any {
    
    if (!filtro || filtro === '') {
      return value;
    }

    filtro = filtro.toLocaleLowerCase();

    return value.filter((item: any) => item.toLocaleLowerCase().includes(filtro));
  }

}
