import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "blog",
    loadChildren: () => import("./features/blog/blog.module").then(m => m.BlogModule)
  },
  {
    path: "user",
    loadChildren: () => import("./features/user/user.module").then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
