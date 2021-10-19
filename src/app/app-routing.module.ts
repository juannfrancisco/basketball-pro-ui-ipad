import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./private/games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'game-live',
    loadChildren: () => import('./pages/game-live/game-live.module').then( m => m.GameLivePageModule)
  },
  {
    path: 'game-live/:id',
    loadChildren: () => import('./pages/game-live/game-live.module').then( m => m.GameLivePageModule)
  },
  {
    path: 'gamex',
    loadChildren: () => import('./pages/gamex/gamex.module').then( m => m.GamexPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
