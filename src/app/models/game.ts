import { Digit } from './digit-scoreboard';
import { Team } from './team';
import { Championship } from './championship';
import { Court } from './court';
export class Game {

    oid:string;
    date:Date;
    visitor:Team;
    local:Team;
    visitorScore:number;
    localScore:number;
    court: Court;
    referee: string;
    championship:Championship;
    state:string;

    localScoreObj?:Digit[];
    visitorScoreObj?:Digit[];


    constructor(){
        this.localScoreObj = [{ number: "0", active: false }, { number: "0", active: false }, { number: "0", active: false }];
        this.visitorScoreObj = [{ number: "0", active: false }, { number: "0", active: false }, { number: "0", active: false }];
    }
}
