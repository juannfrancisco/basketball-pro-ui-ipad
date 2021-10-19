import { Stats } from './stats';
export class Player {
    oid:string;
    oidCurrentTeam:string;
    id:string;
    name:string;
	lastName:string;
	birthdate:Date;
	height:number;
	weight:number;
    gender:string;
    number:number;
    position:string;


    headline?:boolean;
    fouls?:number;
    stats?:Stats;


}
