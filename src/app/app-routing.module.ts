import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthguardGuard } from './guard/authguard.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/signin'
  },
  {
    path:'home',
    canActivate:[AuthguardGuard],
    component:HomeComponent
  },
  {
    path:'products',
    canActivate:[AuthguardGuard],
    component:ProductsComponent
  },
  {
    path:'profile',
    canActivate:[AuthguardGuard],
    component:ProfileComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'**',
    canActivate:[AuthguardGuard],
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
