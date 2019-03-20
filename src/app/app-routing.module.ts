import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {FeaturesComponent} from './components/features/features.component' 
import { PoojaDetailsComponent } from './components/pooja-details/pooja-details.component';
import { PoojaItemsComponent } from "./components/pooja-items/pooja-items.component";
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
const routes: Routes = [
  {
    path : 'home',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    // pathMatch: 'full'
  },
  {
    path: 'contact_us',
    component: ContactUsComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'pooja_items',
    component: PoojaItemsComponent
  },
  {
    path: 'poojadetails/:id',
    component: PoojaDetailsComponent
  },
  {
    path: 'howitworks',
    component: HowitworksComponent
  },
  {
    path: 'screenshots',
    component: ScreenshotsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
