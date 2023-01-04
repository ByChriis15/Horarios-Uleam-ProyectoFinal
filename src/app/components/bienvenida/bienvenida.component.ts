import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit{
  dataUser:any;
  constructor(private afAuth: AngularFireAuth, private router:Router)
  {}
  ngOnInit(): void {

  }
  logOut(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }
}
