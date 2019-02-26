import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { PoojaDetailsComponent } from './components/pooja-details/pooja-details.component';
import { PoojaItemsComponent, DialogContentDialog } from './components/pooja-items/pooja-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';


import { MatButtonModule, MatChipsModule, MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ContactUsComponent,
    FeaturesComponent,
    PoojaDetailsComponent,
    PoojaItemsComponent,
    DialogContentDialog,
    HowitworksComponent,
    ScreenshotsComponent
  ],
  entryComponents: [DialogContentDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,

    MatChipsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
