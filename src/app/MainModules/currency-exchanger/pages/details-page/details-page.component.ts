import { Component, OnInit } from '@angular/core';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements OnInit {
  historicalData: {
    lastYear: any;
    lastMonth: any;
    lastDay: any;
  } = { lastYear: null, lastMonth: null, lastDay: null };
  currencies = ['USD', 'AED', 'EGP'];
  base!: string;
  targetCurrency!:string;
  constructor(
    private currencyService: CurrencyExchangerService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((prams: Params) => {
      if (prams['from']) {
        this.base = prams['from'];
        this.targetCurrency=prams['to'];
        this.fetchHistoricalData();
      }
    });
  }

  fetchHistoricalData() {
    const today = new Date();
    const lastDay = new Date(today);
    lastDay.setDate(today.getDate() - 1);

    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    const lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);

    // Format dates as 'YYYY-MM-DD'
    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    if(!this.currencies.includes(this.targetCurrency)){
      this.currencies.unshift(this.targetCurrency);
    }
    const symbols = this.currencies.join(',');

    // Fetch last day
    this.currencyService
      .getHistoricalRates(formatDate(lastDay),this.base,this.currencies)
      .subscribe((data) => {
        this.historicalData.lastDay = data;
      });

    // Fetch last month
    this.currencyService
      .getHistoricalRates(formatDate(lastMonth), this.base,this.currencies)
      .subscribe((data) => {
        this.historicalData.lastMonth = data;
      });

    // Fetch last year
    this.currencyService
      .getHistoricalRates(formatDate(lastYear),this.base, this.currencies)
      .subscribe((data) => {
        this.historicalData.lastYear = data;
      });
  }
}
