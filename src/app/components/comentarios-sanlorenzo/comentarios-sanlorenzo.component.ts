import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-comentarios-sanlorenzo',
  templateUrl: './comentarios-sanlorenzo.component.html',
  styleUrls: ['./comentarios-sanlorenzo.component.css']
})
export class ComentariosSanlorenzoComponent {
  dataUser:any;
  constructor(private _CargaScript:CargarScriptService,private afAuth: AngularFireAuth, private router:Router)
  {
   _CargaScript.Carga(["comentarios"]);
  }
  logOut(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }
}
