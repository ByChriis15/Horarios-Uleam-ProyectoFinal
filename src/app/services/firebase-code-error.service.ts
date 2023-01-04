import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }


  codeError(code:string){
    switch(code){

      //El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      //Correo debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil';
      
      //Correo invalido 
      case FirebaseCodeErrorEnum.InvalidEmail:
          return 'Correo inválido';

      //Contraseña incorrecta
      case FirebaseCodeErrorEnum.WrongPassword:
          return 'Contraseña incorrecta';

       //El usuario no existe
       case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';

      default:
        return 'Error desconocido'
    }
  }


}

