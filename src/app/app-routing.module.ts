import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { ValidacionComponent } from './components/validacion/validacion.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ComentariosPlayamurcieComponent } from './components/comentarios-playamurcie/comentarios-playamurcie.component';
import { ComentariosRestaurantComponent } from './components/comentarios-restaurant/comentarios-restaurant.component';
import { ComentariosSanlorenzoComponent } from './components/comentarios-sanlorenzo/comentarios-sanlorenzo.component';
import { ComentariosWyndhamComponent } from './components/comentarios-wyndham/comentarios-wyndham.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { PlayamurcieComponent } from './components/playamurcie/playamurcie.component';
import { RestauranthlpComponent } from './components/restauranthlp/restauranthlp.component';
import { SanlorenzoComponent } from './components/sanlorenzo/sanlorenzo.component';
import { WyndhamComponent } from './components/wyndham/wyndham.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registrate',component:RegistrateComponent},
  {path:'validacion',component:ValidacionComponent},
  {path:'verificar-correo',component:VerificarCorreoComponent},
  {path:'recuperar-password',component:RecuperarPasswordComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'comentarios-playa-murcielago',component:ComentariosPlayamurcieComponent},
  {path:'comentarios-restaurante-hasta-las-patas',component:ComentariosRestaurantComponent},
  {path:'comentarios-sanlorenzo',component:ComentariosSanlorenzoComponent},
  {path:'comentarios-wyndham',component:ComentariosWyndhamComponent},
  {path:'destacados',component:DestacadosComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'playa-murcielago',component:PlayamurcieComponent},
  {path:'restaurante-hasta-las-patas',component:RestauranthlpComponent},
  {path:'san-lorenzo',component:SanlorenzoComponent},
  {path:'wyndham',component:WyndhamComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'sobre',component:SobreComponent},
  {path:'favoritos',component:FavoritosComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
