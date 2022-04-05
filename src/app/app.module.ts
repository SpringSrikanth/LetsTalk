import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthModule } from './auth/auth/auth.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HttpinterceptorInterceptor } from './interceptors/httpinterceptor.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthenticationService } from './auth/authentication.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UsersComponent } from './components/users/users.component';
import { ImageSlideShowComponent } from './components/image-slide-show/image-slide-show.component';
import { AdminDirectiveDirective } from './directives/admin-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AuditsComponent } from './components/audits/audits.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserdetailsSideNavComponent } from './components/userdetails-side-nav/userdetails-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ProductsComponent,
    AboutusComponent,
    BlogsComponent,
    ForbiddenComponent,
    UsersComponent,
    ImageSlideShowComponent,
    AdminDirectiveDirective,
    AuditsComponent,
    UserdetailsSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpinterceptorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
