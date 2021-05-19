import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '@app/@shared/services/header.service';

import { AuthenticationService } from '@app/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  private unSubsribe$ = new Subject<void>();
  numberSocketElement: number = 0;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.getNumberOfSocetProduct();
  }

  getNumberOfSocetProduct() {
    this.headerService.socketNumber.pipe(takeUntil(this.unSubsribe$)).subscribe((data: number) => {
      this.numberSocketElement = data;
    });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService
      .logout()
      .pipe(takeUntil(this.unSubsribe$))
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    return this.authenticationService.getAuthenticateUser().getUsername();
  }
}
