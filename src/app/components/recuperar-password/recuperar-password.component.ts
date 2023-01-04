import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit{
  recuperarUsuario: FormGroup;
  loading:boolean=false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError:FirebaseCodeErrorService){
      this.recuperarUsuario=this.fb.group({
        correo:['',[Validators.required,Validators.email]]
      })
  }
  ngOnInit(): void {
  }
  recuperar(){
    const email=this.recuperarUsuario.value.correo;
    this.loading=true;
      
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      this.toastr.info('En su correo podrá restablecer su contraseña mediante un correo que le enviamos','Recuperar Contraseña')
      this.router.navigate(['/login']);
    }).catch((error)=>{
      this.loading=false;
      this.toastr.error(this.FirebaseError.codeError(error.code), 'Error')

    })
  }
}
