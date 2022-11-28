import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformKcal'
})
export class TransformKcalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const regex = new RegExp(/([*])(?:(?=(\\?))\2.)*?\1/g, 'gi');;
    return value.replace(regex, (match) => `<u>${match.replace(/\*/g,'')}</u>`);
  }

}
