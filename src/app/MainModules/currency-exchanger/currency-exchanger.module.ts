import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { MainExchangerPageComponent } from './pages/main-exchanger-page/main-exchanger-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainExchangerPageComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    HttpClientModule
  ]
})
export class CurrencyExchangerModule { }
