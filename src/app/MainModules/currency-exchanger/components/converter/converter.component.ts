import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICurrency, ISymbols } from '../../utilities/models';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class ConverterComponent implements OnInit {
  form!: FormGroup;
  currencies: ICurrency[] = [];
  originalData!:ISymbols;
  isDataLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyExchangerService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCurrenciesList();
  }

  initForm() {
    this.form = this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      amount: [1, [Validators.required]],
    });
  }

  getCurrenciesList() {
    this.isDataLoading = true;
    this.currencyService
      .getCurrencySymbols()
      .pipe(finalize(() => (this.isDataLoading = false)))
      .subscribe({
        next: (res) => {
          this.originalData=res;
          this.prepareResponseForDisplaying(res);
        },
      });
  }

  prepareResponseForDisplaying(res: ISymbols) {
    if (res.success) {
      this.currencies.push(
        ...Object.keys(res.symbols).map((key) => {
          return { name:this.getDisplayedLabel(key), code: key };
        })
      );
    }
  }

  onSwap(){
    const toValue=this.form.get('to')?.value;
    this.form.controls['to'].setValue(this.form.controls['from'].value);
    this.form.controls['from'].setValue(toValue);
  }
  getDisplayedLabel(code:string){
    return `${code}-${this.originalData.symbols[code]}`
  }

  onConvert() {
    if(this.form.invalid) return;
    this.currencyService.covertAmount(this.form.value).subscribe({
      next:(res)=>{
       if(res.success){
        console.log("Converted",res.result)
       }
      }
    })
    console.log(this.form.value);
  }
}
