import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EvidenciasComponent } from './components/evidencias/evidencias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotasComponent } from './components/notas/notas.component';
import { SesionesPasadasComponent } from './components/sesiones-pasadas/sesiones-pasadas.component';
import { SubirArchivosComponent } from './components/subir-archivos/subir-archivos.component';


export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'calendario', component: CalendarioComponent},
  { path: 'evidencias', component: EvidenciasComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'notas', component: NotasComponent},
  { path: 'SesionesPasadasComponent', component: SesionesPasadasComponent},
  { path: 'SubirArchivosComponent', component: SubirArchivosComponent},

];
