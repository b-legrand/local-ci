import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentPageComponent } from './components/consent-page/consent-page.component';
import { ConsentPageRoutingModule } from './consent-page-routing.module';

@NgModule({
  declarations: [ConsentPageComponent],
  imports: [CommonModule, ConsentPageRoutingModule],
})
export class ConsentPageModule {}
