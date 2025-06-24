
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./features/CRUD/crud.component').then(c => c.CrudComponent)
    }
];
