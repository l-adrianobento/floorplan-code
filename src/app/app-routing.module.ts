import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { VisitaPage } from './pages/visita/visita.page';
import { MoveisPage } from './pages/moveis/moveis.page';
import { RevestimentosPage } from './pages/revestimentos/revestimentos.page';
import { ComparadorPrecosPage } from './pages/comparador-precos/comparador-precos.page';
import { FichasTecnicasPage } from './pages/fichas-tecnicas/fichas-tecnicas.page';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'visita', component: VisitaPage },
  { path: 'revestimentos', component: RevestimentosPage },
  { path: 'fichas-tecnicas', component: FichasTecnicasPage },
  { path: 'comparador-de-precos', component: ComparadorPrecosPage },
  { path: 'moveis', component: MoveisPage },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
