import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aqui você pode adicionar a lógica para lidar com o formulário de login
      console.log('Email:', this.loginForm.get('email')?.value);
      console.log('Password:', this.loginForm.get('password')?.value);
      console.log('Remember Me:', this.loginForm.get('rememberMe')?.value);
    } else {
      console.log('Formulário inválido. Preencha todos os campos corretamente.');
    }
  }

  onRegisterClick(): void {
    this.router.navigate(['/register']);
    console.log('Tela alterada para a tela de registro');
  }
}

/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  /*constructor(private formBuilder: FormBuilder) {}
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aqui você pode adicionar a lógica para lidar com o formulário de login
      console.log('Email:', this.loginForm.get('email')?.value);
      console.log('Password:', this.loginForm.get('password')?.value);
      console.log('Remember Me:', this.loginForm.get('rememberMe')?.value);
    } else {
      console.log('Formulário inválido. Preencha todos os campos corretamente.');
    }
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

}*/