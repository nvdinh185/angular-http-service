import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpComponent } from './ip.component';
import { IpComponentService } from './ip.component_service';
import { IpComponentngOnInit } from './ip.component_ngOnInit';
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service'


@NgModule({
  declarations: [
    AppComponent,
    IpComponent,
    IpComponentService,
    IpComponentngOnInit,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [IpService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
