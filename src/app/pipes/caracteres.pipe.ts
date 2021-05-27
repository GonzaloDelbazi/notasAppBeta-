import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caracteres'
})
export class CaracteresPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 12) + '...';
  }

}
