import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=> import ("../LayoutModule/layout.module").then((m)=>m.LayoutModule)
    }
   
];
