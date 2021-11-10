import { TypeStat } from './type-stat';
import { TypeTeam } from './type-team';
import { Player } from './player';
export class GameStat {
    oid:string;
    oidPlayer:string;
    quarter:number;
    quarterTimeText:string;
    type:TypeStat;
    value:number;
    typeTeam:TypeTeam;
    teamOid:string;

    player?:Player;
    saved?:boolean;

}
