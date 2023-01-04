import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarScriptService } from 'src/app/cargar-script.service';

@Component({
  selector: 'app-playamurcie',
  templateUrl: './playamurcie.component.html',
  styleUrls: ['./playamurcie.component.css']
})
export class PlayamurcieComponent {

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
