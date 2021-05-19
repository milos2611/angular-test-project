import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes(
    [{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }],
    ['user']
  ),
  Shell.childRoutes(
    [{ path: 'products/list', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) }],
    ['user']
  ),
  Shell.childRoutes(
    [
      {
        path: 'admin',
        loadChildren: () => import('./administration/administration.module').then((m) => m.AdministrationModule),
      },
    ],
    ['admin', 'user']
  ),
  Shell.childRoutes(
    [
      {
        path: 'dynamic-form',
        loadChildren: () => import('./dynamic-form/dynamic-form.module').then((m) => m.DynamicFormModule),
      },
    ],
    ['user']
  ),
  Shell.childRoutes(
    [
      {
        path: 'product-dashboard',
        loadChildren: () =>
          import('./product-dashboard/product-dashboard.module').then((m) => m.ProductDashboardModule),
      },
    ],
    ['user']
  ),

  Shell.childRoutes(
    [
      {
        path: 'ngx-datatable',
        loadChildren: () => import('./ngx-datatable/ngx-datatable.module').then((m) => m.NGXDatatableModule),
      },
    ],
    ['user']
  ),
  Shell.childRoutes(
    [
      {
        path: 'drag-and-drop',
        loadChildren: () => import('./drag-and-drop/drag-and-drop.module').then((m) => m.DragAndDropModule),
      },
    ],
    ['user']
  ),

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
