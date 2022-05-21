import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogTransactionComponent } from './pages/blog-transaction/blog-transaction.component';
import { RouterModule } from '@angular/router';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BootstrapModule } from 'src/app/bootstrap/bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogCommandbarComponent } from './components/blog-commandbar/blog-commandbar.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogTransactionComponent,
    BlogItemComponent,
    BlogCommandbarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
