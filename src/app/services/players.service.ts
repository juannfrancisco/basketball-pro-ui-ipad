import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Player[]>( environment.endpoint +  "players" );
  }

  findAllByTeam( oidTeam:string ){
    return this.http.get<Player[]>( environment.endpoint +  "teams/"+ oidTeam+"/players" );
  }


  findById( oid:string ){
    return this.http.get<Player>( environment.endpoint +  "players/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "players/" + oid );
  }

  save( player:Player ){
    return this.http.put( environment.endpoint +  "teams/"+ player.oidCurrentTeam + "/players", player );
  }

  update( player:Player ){
    return this.http.post( environment.endpoint +  "players", player );
  }
}
