import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-comentarios-wyndham',
  templateUrl: './comentarios-wyndham.component.html',
  styleUrls: ['./comentarios-wyndham.component.css']
})
export class ComentariosWyndhamComponent {
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
