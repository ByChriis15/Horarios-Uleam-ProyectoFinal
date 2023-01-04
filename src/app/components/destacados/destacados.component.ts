import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
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
