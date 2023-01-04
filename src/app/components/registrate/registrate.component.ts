import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean=false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError:FirebaseCodeErrorService
    ) {
    this.registrarUsuario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      numero: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }
  registrar() {
    const nombre = this.registrarUsuario.value.nombre;
    const apellidos = this.registrarUsuario.value.apellidos;
    const numero = this.registrarUsuario.value.numero;
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const password2 = this.registrarUsuario.value.password2;
    if (password !== password2) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');



      return;
    }
    this.loading=true;

    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.loading=false;
      this.toastr.success('Usuario Registrado correctamente','Éxito')
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading=false;
      this.toastr.error(this.FirebaseError.codeError(error.code), 'Error')
    })
  }

}
