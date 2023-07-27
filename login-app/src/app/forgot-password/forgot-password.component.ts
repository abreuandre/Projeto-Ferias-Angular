import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  onForgotPassword() {
    // Lógica para o que acontece quando o link é clicado
    // Por exemplo, exibir uma mensagem ou redirecionar para outra página
    alert("Forgot Password link clicked!");
  }

}
