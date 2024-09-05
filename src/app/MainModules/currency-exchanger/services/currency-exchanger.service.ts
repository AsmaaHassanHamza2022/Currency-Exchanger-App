import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '../../../CallerModule/configs/APIsUrls';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  IConvertRequestPrams,
  IConvertResponse,
  ILatestAPiPrams,
  ILatestRes,
  ISelectedValue,
  ISymbols,
} from '../utilities/models';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangerService {
  originalData!:ISymbols;
  currentAmountData!:ISelectedValue;
  convertedAmountData!:ISelectedValue;
  currentExchangeRate:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  currentExchangeRate$=this.currentExchangeRate.asObservable();

  constructor(private http: HttpClient) {}

  getCurrencySymbols(): Observable<ISymbols> {
    return this.http.get<ISymbols>(APIs.ConversionApis.GetCurrencySymbols);
  }

  getLatestRateValue(params: ILatestAPiPrams,amount:number): Observable<ILatestRes> {
    return this.http.get<ILatestRes>(APIs.ConversionApis.GetLatestRates, {
      params: { ...params },
    }).pipe(tap((res)=>{
      const convertedAmount=Math.floor( amount* res.rates[params.symbols])
      this.setAmounts({
        name:this.originalData.symbols[params.base],
        amount:amount
      },{
        name:this.originalData.symbols[params.symbols],
        amount:convertedAmount
        
      });
      this.currentExchangeRate.next(res.rates[params.symbols]);
    }));
  }

  covertAmount(params: IConvertRequestPrams): Observable<IConvertResponse> {
    return this.http.get<IConvertResponse>(APIs.ConversionApis.ConvertAmount, {
      params: { ...params },
    });
  }

  setAmounts(currentAmountData:ISelectedValue,convertedAmountData:ISelectedValue){
    this.currentAmountData=currentAmountData;
    this.convertedAmountData=convertedAmountData;
  }
}
