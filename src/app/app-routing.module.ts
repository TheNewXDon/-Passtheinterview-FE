import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ApplicationComponent } from './components/application/application.component';
import { PrivacyComponent } from './components/info/privacy/privacy.component';
import { TermsComponent } from './components/info/terms/terms.component';
import { MainComponent } from './components/home/main/main.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{ path:'**', component: HomeComponent },
  { path:"", component: MainComponent },
  { path:"home", component: MainComponent },
  { path:"registration", component: RegistrationComponent},
  { path:"login", component: LoginComponent},
  { path:"app", component: ApplicationComponent },
  { path:"privacy", component: PrivacyComponent},
  { path:"terms", component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
