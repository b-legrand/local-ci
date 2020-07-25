import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: "full",
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
      ],
      {
        initialNavigation: 'enabled',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
