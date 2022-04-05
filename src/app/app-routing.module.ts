import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuditsComponent } from './components/audits/audits.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserdetailsSideNavComponent } from './components/userdetails-side-nav/userdetails-side-nav.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guard/admin/admin.guard';
import { AuthguardGuard } from './guard/auth/authguard.guard';

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
    path:'blogs',
    canActivate:[AuthguardGuard],
    component:BlogsComponent
  },
  {
    path:'audits',
    canActivate:[AuthguardGuard],
    component:AuditsComponent
  },
  {
    path:'contact-us',
    canActivate:[AuthguardGuard],
    loadChildren:()=>
      import('./components/contactus/contactus.module').then(m=>{
        return m.ContactusModule
    })
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'users',
    canActivate:[AuthguardGuard,AdminGuard],
    component:UsersComponent
  },
  {
    path:'forbidden',
    component:ForbiddenComponent
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
