import { provideRouter, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ServicesPage } from './services/services';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: ServicesPage },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

export const routerProviders = [
  provideRouter(routes)
];
