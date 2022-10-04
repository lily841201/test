import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './page/index/index.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
  //a-route-path-default
{ path: '', pathMatch: 'full', redirectTo: 'index' },
{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'index', component: IndexComponent }
  ]
},
{ path: 'signUp', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
