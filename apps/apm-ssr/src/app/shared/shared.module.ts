import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';

import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CardComponent, MenuComponent],
  exports: [CardComponent, MenuComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, MatTooltipModule],
})
export class SharedModule {}
