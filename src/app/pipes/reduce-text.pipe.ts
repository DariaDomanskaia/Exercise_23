import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reduceText'
})
export class ReduceTextPipe implements PipeTransform {

  transform(value: string): string {
    let length = 75;
    return value.substring(0, length) + '...';
  }

}
