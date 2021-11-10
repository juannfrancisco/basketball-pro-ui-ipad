import { GameStat } from './../models/game-stat';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsFilter'
})
export class StatsFilterPipe implements PipeTransform {

  transform(data: GameStat[], quarter: number): GameStat[] {
    
    data = data.sort((a, b) => (a.quarterTimeText.localeCompare(b.quarterTimeText) ));
    data = data.sort((a, b) => (a.quarter < b.quarter ? -1 : 1));    
    
    if (!data || !quarter || quarter == 0) {
      return data;
    }
    return data.filter(item => item.quarter == quarter);
  }

}
