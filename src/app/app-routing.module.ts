import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {FeaturesComponent} from './components/features/features.component' 
const routes: Routes = [
  {
    path : 'home',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'contact_us',
    component: ContactUsComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
