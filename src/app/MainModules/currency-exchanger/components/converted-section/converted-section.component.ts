import { Component } from '@angular/core';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converted-section',
  templateUrl: './converted-section.component.html',
  styleUrl: './converted-section.component.scss'
})
export class ConvertedSectionComponent {

  constructor(public currencyExService:CurrencyExchangerService,private router:Router){}

   get isDetailsPage(){
     return this.router.url.includes('/details')
   }

   navigateOnDetails(){
    this.router.navigate(['/details'],{queryParams:{from:this.currencyExService.currentAmountData.code,to:this.currencyExService.convertedAmountData.code,amount:this.currencyExService.currentAmountData.amount}})
   }

}
