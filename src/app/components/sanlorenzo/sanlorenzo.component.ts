import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-sanlorenzo',
  templateUrl: './sanlorenzo.component.html',
  styleUrls: ['./sanlorenzo.component.css']
})
export class SanlorenzoComponent {
  dataUser:any;
  constructor(private _CargaScript:CargarScriptService,private afAuth: AngularFireAuth, private router:Router)
  {
    _CargaScript.Carga(["sitios"]);
  }
  ngOnInit(): void {

  }
  logOut(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }
}
