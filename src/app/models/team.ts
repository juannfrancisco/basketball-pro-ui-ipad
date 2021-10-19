import { Player } from './player';
import { Contact } from './contact';
export class Team {

    oid:string;
    name:string;
    nameURL:string;
    bio:string;
    gender:string;
    category:string;
    contact:Contact;
    players?:Player[];
    


    constructor(){
        this.contact = new Contact();
        this.players = [];
    }
	//ngprivate Contact contact;
}
