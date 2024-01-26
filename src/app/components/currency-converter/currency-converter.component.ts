import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

export interface Currencies {
  code: string,
  currency: string,
  mid: number
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  actualCurrencies: Currencies[] = [];
  currencyConverterForm: FormGroup;
  selectedMid: number | undefined;
  result: number | undefined;
  isSubmitted: boolean = false;

  constructor(
    private currencyConverterService: CurrencyConverterService,
    private fb: FormBuilder
  ) {
    this.currencyConverterForm = this.fb.group({
      amountToBeConverted: ['', Validators.required],
      fromCurrency: ['', Validators.required],
      toCurrency: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getCurrencyData();
  }
  
  getCurrencyData(): void {
    this.currencyConverterService.getActualCurrencies().subscribe({
      next: response => {
        this.actualCurrencies = response[0].rates;
        this.selectedMid = response[0].rates.mid;
      },
      error: error => console.log(error.message),
      complete: () => console.log('NBP request completed')
    })
  }

  convert(): void {
    this.currencyConverterForm.markAllAsTouched();
    
    const amountToBeConverted = this.currencyConverterForm.get('amountToBeConverted')?.value;
    const baseCurrency = this.currencyConverterForm.get('fromCurrency')?.value;
    const targetCurrency = this.currencyConverterForm.get('toCurrency')?.value;
    
    const baseCurrencyRate = this.actualCurrencies.find(currency => currency.code === baseCurrency)?.mid;
    const targetCurrencyRate = this.actualCurrencies.find(currency => currency.code === targetCurrency)?.mid;
    
    baseCurrencyRate && targetCurrencyRate ? this.result = (amountToBeConverted * baseCurrencyRate) / targetCurrencyRate : console.log("Something went wrong.."); 

    if (this.currencyConverterForm.valid) {
      SubmitEvent;
      this.isSubmitted = true;
    }
  }

}
