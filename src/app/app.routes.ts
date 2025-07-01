import { Routes } from '@angular/router';
import {Todos} from './todos/todos'
import{About} from './about/about'

export const routes: Routes = [
     { path: '', component: Todos },
     { path: 'about', component: About },
];
