import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './components/about/about.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavVarComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
