import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeHeroesComponent } from './components/listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';

const routes: Routes = [
  { path: 'listado-heroes', component: ListadoDeHeroesComponent},
  { path: 'heroe/:id', component: HeroProfileComponent},
  { path: 'modal-poll', component: ModalPollComponent},
  { path: '**', redirectTo: '/listado-heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

