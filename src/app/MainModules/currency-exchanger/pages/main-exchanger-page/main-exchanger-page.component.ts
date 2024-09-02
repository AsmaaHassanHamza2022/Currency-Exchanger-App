import { Component } from '@angular/core';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';

@Component({
  selector: 'app-main-exchanger-page',
  templateUrl: './main-exchanger-page.component.html',
  styleUrl: './main-exchanger-page.component.scss'
})
export class MainExchangerPageComponent {

  constructor(private exchangerService:CurrencyExchangerService){

  }

}
