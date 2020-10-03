import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class PrefixPipe implements PipeTransform {
  transform(value: string): string {
    return 'You selected the dish: ' + value;
  }
}
