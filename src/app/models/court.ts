import { Location } from './location';
export class Court {
    oid:string;
    name:string;
    description:string;
    spectators:number;
    location:Location;

    constructor(){
        this.location = new Location();
    }
}
