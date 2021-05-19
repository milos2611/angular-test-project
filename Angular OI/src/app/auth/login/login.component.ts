import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '@env/environment';
import { UntilDestroy, untilDestroyed } from '@core';
import { AuthenticationService } from '../service/authentication.service';
import { Logger } from '@app/@core/http/services/logger.service';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.authenticationService.login(this.loginForm.value);
    this.authenticationService.authStatusChanged.subscribe(
      (credentials) => {
        if (credentials) {
          this.router.navigate(['/home'], { replaceUrl: true });
        }
      },
      (error) => {
        log.debug(`Login error: ${error}`);
        this.error = error;
      }
    );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
