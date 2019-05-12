import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppbarComponent } from './appbar/appbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import {MatButtonModule} from '@angular/material/button';
import { ContentComponent } from './content/content.component';
import {MatChipsModule} from '@angular/material/chips';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LottieAnimationViewModule } from 'lottie-angular2';



@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    DrawerComponent,
    ContentComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatSnackBarModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
