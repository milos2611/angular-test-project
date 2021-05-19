import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth';
import { AuthGuardRole } from '@app/auth/service/authentication-role.guard';
import { AdministrationComponent } from './administration.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './all-products/product/product.component';

const routes: Routes = [
  {
    path: '',

    component: AdministrationComponent,
    canActivateChild: [AuthGuardRole],
    children: [
      {
        path: 'product/:mode',
        children: [
          { path: '', component: ProductComponent, data: { role: 'dsds' } },
          { path: ':id', component: ProductComponent },
        ],
      },
      { path: 'all-products', component: AllProductsComponent },
      { path: '', redirectTo: '/admin/all-products' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
