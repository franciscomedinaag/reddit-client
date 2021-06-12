import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DataApiService } from './services/data-api.service';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
