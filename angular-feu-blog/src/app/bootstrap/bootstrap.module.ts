import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { filePost, xCircle, penFill, plusCircle } from 'ngx-bootstrap-icons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const icons = {
  plusCircle,
  filePost,
  xCircle,
  penFill

}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDatepickerModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  exports: [
    BsDatepickerModule,
    NgxBootstrapIconsModule
  ]
})
export class BootstrapModule { }
