import { Team } from './../../models/team';
import { Player } from './../../models/player';
import { Game } from './../../models/game';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  elements: Game[] = []; 
  oidChampionship: string;
  loading:boolean;

  constructor(
    private service: GamesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.oidChampionship = "";
    this.loadData();
  }

  loadData(){
    this.loading = true;
    this.service.findAll().subscribe(data => {
      this.elements = data;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  view(game:Game){
    this.router.navigate( ['/game-live', game.oid] );
  }

}
