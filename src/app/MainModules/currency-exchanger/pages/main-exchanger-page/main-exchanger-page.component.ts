import { Component, OnInit } from '@angular/core';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';
import { IConversion, IStaticTableConfigs } from '../../utilities/models';

@Component({
  selector: 'app-main-exchanger-page',
  templateUrl: './main-exchanger-page.component.html',
  styleUrl: './main-exchanger-page.component.scss',
})
export class MainExchangerPageComponent implements OnInit {
  staticCurrencyList = [1, 5, 10, 20, 50, 100];
  staticListForFromValue: IConversion[] = [];
  staticDateForFromValue!: IStaticTableConfigs;
  staticListForToValue: IConversion[] = [];
  staticDateForToValue!: IStaticTableConfigs;
  constructor(public currencyExService: CurrencyExchangerService) {}

  ngOnInit(): void {
    this.currencyExService.currentExchangeRate$.subscribe((value) => {
      if(!!value){
        this.getStaticListForFromValue(value);
        this.getStaticListForToValue(value);
      }
      
    });
  }

  getStaticListForFromValue(rateValue: number) {
    this.staticListForFromValue = this.staticCurrencyList.map((value) => {
      return {
        from: value,
        to:+(value * rateValue).toFixed(3),
      };
    });
    this.staticDateForFromValue = {
      sourceCurrencyName: this.currencyExService.currentAmountData?.name,
      targetCurrencyName: this.currencyExService.convertedAmountData?.name,
      conversions: [...this.staticListForFromValue],
    };
  }

  getStaticListForToValue(rateValue: number) {
    this.staticListForToValue = this.staticCurrencyList.map((value) => {
      return {
        from: value,
        to:+(value / rateValue)?.toFixed(3),
      };
    });

    this.staticDateForToValue = {
      sourceCurrencyName: this.currencyExService.convertedAmountData?.name,
      targetCurrencyName: this.currencyExService.currentAmountData?.name,
      conversions: [...this.staticListForToValue],
    };
  }
}
