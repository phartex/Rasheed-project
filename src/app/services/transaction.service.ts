import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { ISendAmount, ISendAmountResponse } from '../model/ITransaction';
import { AppConfigService } from './config/app-config.service';


const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json").set("User-Agent", "PostmanRuntime/7.29.2")
  .set("Accept-Encoding","gzip, deflate, br"),

};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private config: AppConfigService, private http: HttpClient,) { }


  sendAmount(MeterId : any, Amount : any): Observable<ISendAmountResponse[]> {
    const body: ISendAmount = {
      CompanyName: "Lion-Edge",
      UserName: "Harbdulrashyd",
      PassWord: "123456",
      MeterId,
      is_vend_by_unit: "false",
      Amount
    };
    console.log(body);

    let path = `https://cors-anywhere.herokuapp.com/${this.config.appConfig.BASE_URL}${this.config.appConfig.vendingMeter}`;
    // let path = `https://cors-anywhere.herokuapp.com/http://www.server-api.stronpower.com/api/VendingMeter`;

  
    return this.http.post<ISendAmountResponse[]>(path, body,   
      {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        // "User-Agent": "PostmanRuntime/7.29.2",
        // "Accept-Encoding":"gzip, deflate, br"
      }),
    }).pipe(
      tap((res) => {
        console.log('This is the API response', res);
      }),
      
    );

  }
}
