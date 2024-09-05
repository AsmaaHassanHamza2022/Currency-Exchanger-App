import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { MainExchangerPageComponent } from './pages/main-exchanger-page/main-exchanger-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlComponent } from '../../Shared/components/control/control.component';
import { PrimengModule } from '../../primengModule/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter/converter.component';
import { ConvertedSectionComponent } from './components/converted-section/converted-section.component';
import { CustomBtnComponent } from '../../Shared/components/custom-btn/custom-btn.component';
import { QuickConversionsComponent } from './components/quick-conversions/quick-conversions.component';

const standaloneComponents=[
  ControlComponent,
  CustomBtnComponent
]

@NgModule({
  declarations: [
    MainExchangerPageComponent,
    ConverterComponent,
    ConvertedSectionComponent,
    QuickConversionsComponent
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
