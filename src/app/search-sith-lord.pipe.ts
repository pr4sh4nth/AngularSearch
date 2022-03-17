import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSithLord'
})
export class SearchSithLordPipe implements PipeTransform {

  transform(pipeData: {name: string, description: string, icon: string, selected: boolean}[], pipeModifier: string): {name: string, description: string, icon: string, selected: boolean}[] {
    return pipeData.filter(sithLord => sithLord.name.toLowerCase().includes(pipeModifier.toLowerCase()));
  }

}
