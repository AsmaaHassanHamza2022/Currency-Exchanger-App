import { Component } from '@angular/core';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';

@Component({
  selector: 'app-converted-section',
  templateUrl: './converted-section.component.html',
  styleUrl: './converted-section.component.scss'
})
export class ConvertedSectionComponent {

  constructor(public currencyExService:CurrencyExchangerService){}



}
