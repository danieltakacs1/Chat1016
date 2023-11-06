import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth,
    private router:Router) { }

  signUp(email:any, password:any){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  sendVerificationEmail(){
    return this.afAuth.currentUser.then(
      (user)=>user?.sendEmailVerification()
    ).then(()=>this.router.navigate(['/verifyemail']))
    .catch((e)=>console.log("Hiba",e))
  }

  googleAuth(){
    return this.afAuth.signInWithRedirect(new GoogleAuthProvider())

  }
  signOut(){
    return this.afAuth.signOut()
  }
}
