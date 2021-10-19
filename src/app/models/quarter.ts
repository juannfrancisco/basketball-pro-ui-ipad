import { Timeout } from './timeout';
export class Quarter {
    number:number;
    name:string;
    timetext:string;
    localPoints: number;
    visitorPoints: number;
    localFouls:number;
    visitorFouls:number;
    localTimeouts:Timeout[];
    visitorTimeouts:Timeout[];
    state:string;

    constructor(){
        this.number = 0;
        this.name =  "";
        this.localPoints = 0;
        this.localFouls = 0;
        this.visitorPoints = 0;
        this.visitorFouls = 0;
        this.localTimeouts = [];
        this.visitorTimeouts = [];
        this.state = "";
        this.timetext = "";
    }
}
