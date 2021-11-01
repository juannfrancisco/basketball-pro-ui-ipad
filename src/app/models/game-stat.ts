import { Player } from './player';
export class GameStat {
    oid:string;
    oidPlayer:string;
    quarter:number;
    quarterTimeText:string;
    type:string;
    value:number;
    typeTeam:string;
    teamOid:string;

    player?:Player;

}
