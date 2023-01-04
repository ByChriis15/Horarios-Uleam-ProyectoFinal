import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import{ CargarScriptService} from './cargar-script.service';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { RegistrateComponent} from './components/registrate/registrate.component';
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
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    RegistrateComponent,
    SpinnerComponent,
    ValidacionComponent,
    VerificarCorreoComponent,
    BienvenidaComponent,
    ComentariosPlayamurcieComponent,
    ComentariosRestaurantComponent,
    ComentariosSanlorenzoComponent,
    ComentariosWyndhamComponent,
    DestacadosComponent,
    LugaresComponent,
    PlayamurcieComponent,
    RestauranthlpComponent,
    SanlorenzoComponent,
    WyndhamComponent,
    ContactanosComponent,
    SobreComponent,
    FavoritosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [CargarScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
