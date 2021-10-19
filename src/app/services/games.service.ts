import { GameStat } from './../models/game-stat';
import { Game } from './../models/game';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor( private http: HttpClient ) { }


  findAll(){
    return this.http.get<Game[]>( environment.endpoint +  "games" );
  }

  findById( oid:string ){
    return this.http.get<Game>( environment.endpoint +  "games/" + oid );
  }

  deleteById( oid:string ){
    return this.http.delete( environment.endpoint +  "games/" + oid );
  }

  save( game:Game ){
    return this.http.put( environment.endpoint +  "games", game );
  }

  update( game:Game ){
    return this.http.post( environment.endpoint +  "games", game );
  }

  updateState( game:Game ){
    return this.http.post( environment.endpoint +  "games/"+game.oid+"/state", game );
  }


  findStats( oid:string ){
    return this.http.get<GameStat[]>( environment.endpoint +  "games/" + oid + "/stats" );
  }

  saveStat( oid:string, gameStat:GameStat ){
    return this.http.put( environment.endpoint +  "games/" + oid + "/stats" , gameStat);
  }
}
