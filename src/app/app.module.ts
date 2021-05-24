import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.page.module';
import { VisitaModule } from './pages/visita/visita.page.module';
import { MoveisModule } from './pages/moveis/moveis.page.module';
import { RevestimentosModule } from './pages/revestimentos/revestimentos.page.module';
import { FichasTecnicasModule } from './pages/fichas-tecnicas/fichas-tecnicas.page.module';
import { ComparadorPrecosModule } from './pages/comparador-precos/comparador-precos.page.module';
import { HeaderModule } from './components/header/header.component.module';
import { FooterModule } from './components/footer/footer.component.module';
import { VoltarModule } from './components/voltar/voltar.component.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    VisitaModule,
    MoveisModule,
    RevestimentosModule,
    FichasTecnicasModule,
    ComparadorPrecosModule,
    HeaderModule,
    VoltarModule,
    FooterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
