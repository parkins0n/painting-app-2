import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFormat'
})
export class YearFormatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return value ? value.toString() : 'Unknown year';
  }
}
