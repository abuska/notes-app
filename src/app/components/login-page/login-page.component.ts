import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  public login(form: NgForm) {
    console.log(form.value);
    // TODO: Implement login here and add auth Service and auth guard
    this.router.navigateByUrl('/');
  }
}
