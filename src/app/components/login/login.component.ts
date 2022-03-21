import { AuthenticationService } from './../../services/authentication.service';
import { LoginModel } from './../../interfaces/LoginModel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  signIN() {
    this.router.navigate(['/registration'])
  }

  ngOnInit(): void {
  }

  loginForm = new LoginModel('', '');

  submit() {
    const email = this.loginForm.email;
    const password = this.loginForm.password;
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['/input']);
    })
  }

}
