import { Routes } from '@angular/router';
import {HeaderComponent} from './plantillas/header/header.component';
import {HomeComponent} from './vistas/home/home.component';
import {FooterComponent} from './plantillas/footer/footer.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent }
];
