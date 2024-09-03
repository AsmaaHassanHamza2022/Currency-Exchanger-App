import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { MainExchangerPageComponent } from './pages/main-exchanger-page/main-exchanger-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlComponent } from '../../Shared/components/control/control.component';
import { PrimengModule } from '../../primengModule/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter/converter.component';

const standaloneComponents=[
  ControlComponent
]

@NgModule({
  declarations: [
    MainExchangerPageComponent,
    ConverterComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ...standaloneComponents
  ]
})
export class CurrencyExchangerModule { }
