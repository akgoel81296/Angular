import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SqrtPipe } from './app.custpipe';//created by me custompipe

import { AppRoutingModule,RoutingComponent_akg } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe,
    HomeComponent,
    ContactusComponent,
    RoutingComponent_akg
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
