import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExchangerPageComponent } from './pages/main-exchanger-page/main-exchanger-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  {
    path:'',
    component:MainExchangerPageComponent,
    // pathMatch:'full'
  },
  {
    path:'details',
    component:DetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangerRoutingModule { }
