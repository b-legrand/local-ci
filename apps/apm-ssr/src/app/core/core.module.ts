import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  forRoot(): ModuleWithProviders<any> {
    return { ngModule: CoreModule, providers: [] };
  }
}
