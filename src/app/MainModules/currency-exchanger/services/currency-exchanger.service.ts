import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '../../../CallerModule/configs/APIsUrls';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {

  constructor(private http:HttpClient) { 
    this.getCurrencySymbols();
  }

  getCurrencySymbols(){
     this.http.get(APIs.ConversionApis.GetCurrencySymbols).subscribe()
  }
}
