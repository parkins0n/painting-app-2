import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFormat'
})
export class SizeFormatPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value ? `${value}` : 'Unknown size';
  }

}