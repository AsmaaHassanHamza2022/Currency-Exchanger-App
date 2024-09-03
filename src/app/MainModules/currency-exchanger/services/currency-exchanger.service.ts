import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '../../../CallerModule/configs/APIsUrls';
import { Observable } from 'rxjs';
import { IConvertRequestPrams, IConvertResponse, ISymbols } from '../utilities/models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {

  constructor(private http:HttpClient) { 
  }

  getCurrencySymbols():Observable<ISymbols>{
     return this.http.get<ISymbols>(APIs.ConversionApis.GetCurrencySymbols);
  }
  covertAmount(params:IConvertRequestPrams):Observable<IConvertResponse>{
    return this.http.get<IConvertResponse>(APIs.ConversionApis.ConvertAmount,{params:{...params}})
  }
}
