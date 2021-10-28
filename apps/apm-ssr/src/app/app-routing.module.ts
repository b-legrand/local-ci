import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./pages/home-page/home-page.module').then(
                  (m) => m.HomePageModule
                ),
            },
            {
              path: 'demo',
              loadChildren: () =>
                import('./pages/demo-page/demo-page.module').then(
                  (m) => m.DemoPageModule
                ),
            },
            {
              path: 'login',
              loadChildren: () =>
                import('./pages/login-page/login-page.module').then(
                  (m) => m.LoginPageModule
                ),
            },
            {
              path: 'consent',
              loadChildren: () =>
                import('./pages/consent-page/consent-page.module').then(
                  (m) => m.ConsentPageModule
                ),
            },
          ],
        },
        {
          path: 'error',
          loadChildren: () =>
            import('./pages/error-page/error-page.module').then(
              (m) => m.ErrorPageModule
            ),
        },
        { path: '**', redirectTo: 'error' },
      ],
      {
        anchorScrolling: 'enabled',
        useHash: false,
        enableTracing: false,
        initialNavigation: 'enabled',
        relativeLinkResolution: 'legacy'
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
