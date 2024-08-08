import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorFormat'
})
export class AuthorFormatPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value ? `${value}` : 'Unknown artist';
  }

}