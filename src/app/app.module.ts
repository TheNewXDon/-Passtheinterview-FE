import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ApplicationComponent } from './components/application/application.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { MainComponent } from './components/home/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacyComponent } from './components/info/privacy/privacy.component';
import { TermsComponent } from './components/info/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ApplicationComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
