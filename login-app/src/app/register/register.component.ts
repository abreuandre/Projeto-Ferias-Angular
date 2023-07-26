import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Full Name:', this.registerForm.get('fullName')?.value);
      console.log('Email:', this.registerForm.get('email')?.value);
      console.log('Password:', this.registerForm.get('password')?.value);
      console.log('Retype Password:', this.registerForm.get('retypePassword')?.value);
      this.router.navigate(['/login']);
      console.log('Cadastro realizado com sucesso');
    } else {
      console.log('Formulário inválido. Preencha todos os campos corretamente.');
    }
  }

  onLoginClick(): void {
    this.router.navigate(['/login']);
    console.log('Tela alterada para a tela de login');
  }

}
