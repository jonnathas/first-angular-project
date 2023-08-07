import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  users: string[] = ["teste"];

  submit() {
    this.users.push(this.userName);
    this.userName = ''; // Limpar o campo após a submissão
  }
}
