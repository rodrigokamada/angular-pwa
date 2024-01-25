import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private apiNbpURL = 'http://api.nbp.pl/api/exchangerates/tables/A/';

  constructor(private http: HttpClient) { }

  getActualCurrencies(): Observable<any> {
    return this.http.get<any>(`${this.apiNbpURL}`);
}


}
