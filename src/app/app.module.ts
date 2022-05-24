import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SingleMemberComponent } from './single-member/single-member.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MembersComponent,
    ContactComponent,
    HomeComponent,
    ErrorPageComponent,
    SingleMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
