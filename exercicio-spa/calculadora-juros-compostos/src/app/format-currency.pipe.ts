import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', locale: string = 'pt-BR'): string {
    const formatoMoeda = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode});
    return formatoMoeda.format(value);
  }

}
