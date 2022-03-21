import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator, passwordMatch, emailValidator } from 'src/app/validators/registration.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) { }

  users: Object[] = []

  get userName() {
    return this.registrationForm.get('username')
  }
  get password() {
    return this.registrationForm.get('password')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  ngOnInit(): void {
  }

  registrationForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, passwordValidator()]],
    confirmpassword: ['', [Validators.required]]
  }, { validator: passwordMatch }
  )

  onSubmit() {
    const { email, password } = this.registrationForm.value
    this.authService.signUp(email, password).subscribe(() => {
      this.route.navigate(['/login']);
    })
  }

}
