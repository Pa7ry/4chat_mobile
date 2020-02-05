import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, EmailValidator, RequiredValidator } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertComponent } from './../alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  hide = true;
  register = true;
  loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private alert: AlertComponent,
    private router: Router
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      nick: new FormControl()
    });
  }

  public anonimo() {
    this.router.navigate(['/chat', '']);
  }

  public async onSubmit() {
    console.log(this.loginForm.status !== 'VALID');
    if (this.loginForm.status !== 'VALID') {
      return;
    }
    if (this.register) {
      return this.authService.registerWithEmail(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => this.router.navigate(['/chat']))
        .catch(() => this.alert.presentAlert('¡Vaya!', '', 'Ya existe una cuenta asociada a este email.', [
          {
            text: 'Olvidé mi contraseña',
            handler: () => this.authService.resetPassword(this.loginForm.value.email)
          },
          'OK'
        ]));
    } else {
      return this.authService.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          const userinfo = this.authService.getStatus();
          console.log(userinfo);
          this.router.navigate(['/chat', 'pa7ry']);
        })
        .catch((e) => {
          console.log(e);
          if (e.code === 'auth/wrong-password') {
            this.alert.presentAlert('¡Vaya!', '', 'Contraseña incorrecta', [
              {
                text: 'Olvidé mi contraseña',
                handler: () => this.authService.resetPassword(this.loginForm.value.email)
              },
              'OK'
            ]);
          } else if (e.code === 'auth/too-many-requests') {
            this.alert.presentAlert('¡Lo sentimos!', '',
                                    'Has intentado acceder demasiadas veces sin éxito. Vuelve a intentarlo más tarde', ['OK']);
          } else {
            this.alert.presentAlert('¡Vaya!', '', 'El usuario no existe', [
              {
                text: 'Registrarse',
                handler: () => this.register = true
              },
              'OK'
            ]);
          }
      });
    }
  }



  ngOnInit() {}

}
