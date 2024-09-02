import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    pathMatch:'full',
    children:[
      {
        path:'',
        loadChildren:()=>import('../MainModules/currency-exchanger/currency-exchanger.module').then((m)=>m.CurrencyExchangerModule)
      }
    ]

  },
  {
    path:'**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
