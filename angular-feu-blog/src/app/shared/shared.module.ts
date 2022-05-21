import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TitleBarComponent } from './layout/title-bar/title-bar.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    TitleBarComponent,
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TitleBarComponent,
  ]
})
export class SharedModule { }
