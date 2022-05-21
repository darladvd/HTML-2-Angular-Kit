import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogTransactionComponent } from './pages/blog-transaction/blog-transaction.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog-list",
    pathMatch: "full"
  },
  {
    path: "blog-list",
    component: BlogListComponent
  },
  {
    path: "blog-transaction/:id",
    component: BlogTransactionComponent,
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
