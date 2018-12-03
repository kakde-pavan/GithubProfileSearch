import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpModule} from '@angular/http';
import {GitHubService} from './services/github.services';
import {HttpClientModule }from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
