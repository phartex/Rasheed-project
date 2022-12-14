import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from "flutterwave-angular-v3"
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { ISendAmount, ISendAmountResponse } from '../model/ITransaction';
import { AppConfigService } from './config/app-config.service';



const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json").set("User-Agent", "PostmanRuntime/7.29.2")
    .set("Accept-Encoding", "gzip, deflate, br"),

};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  publicKey = "FLWPUBK_TEST-e49cf6315111eb44cdd54c8c4384b599-X";

  customerDetails = { name: 'Demo Customer  Name', email: 'customer@mail.com', phone_number: '08100000000' }

  customizations = { title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-colored.svg' }

  meta = { 'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd' }

  paymentData: InlinePaymentOptions = {
    public_key: this.publicKey,
    tx_ref: this.generateReference(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url: '',
    meta: this.meta,
    customer: this.customerDetails,
    customizations: this.customizations,
    callback: this.makePaymentCallback,
    onclose: this.closedPaymentModal,
    callbackContext: this
  };

  private tokenSource$ = new BehaviorSubject<string>('');
  public token = this.tokenSource$.asObservable();

  constructor(private config: AppConfigService,
    private flutterwave: Flutterwave,
    private http: HttpClient,
  ) { }

  
 
  queryMeter(MeterId: any, Amount: any): Observable<ISendAmountResponse[]> {
    const body: ISendAmount = {
      CompanyName: "Lion-Edge",
      UserName: "Harbdulrashyd",
      PassWord: "123456",
      MeterId,
      is_vend_by_unit: "false",
      Amount
    };
    console.log(body);
    
    let path = `${this.config.appConfig.BASE_URL}api/QueryMeterInfo`;
    // let path = `${this.config.appConfig.BASE_URL}api/QueryMeterInfo`;
   

    return this.http.post<ISendAmountResponse[]>(path, body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          'mode': 'no-cors'
        }),
      }).pipe(
        tap((res) => {
          console.log('This is the API response', res);
        }),
      );
  };


  getVendingMeterDetails(MeterId: any, Amount: any){
    const body: ISendAmount = {
      CompanyName: "Lion-Edge",
      UserName: "Harbdulrashyd",
      PassWord: "123456",
      MeterId,
      is_vend_by_unit: "false",
      Amount
    };
    console.log(body);

    let path = `${this.config.appConfig.BASE_URL}${this.config.appConfig.VENDINGMETER}`;
    

    return this.http.post<ISendAmountResponse[]>(path, body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      }).pipe(
        tap((res) => {
          console.log('This is the API response', res);
        }),
      );
  };


queryMeterCredit(MeterId: any): Observable<any> {
    const body = {
      CompanyName: "Lion-Edge",
      UserName: "Harbdulrashyd",
      PassWord: "123456",
      MeterId
    };

    let path = `${this.config.appConfig.BASE_URL}${this.config.appConfig.QUERYMETERCREDIT}`;
    return this.http.post<ISendAmountResponse[]>(path, body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      }).pipe(
        tap((res) => {
          console.log('This is the API response', res);
        }),
      );
  }







  sendAmount(value: any) {

    console.log(value)

  }
  makePayment(amount: any) {
    this.paymentData.amount = amount;
    this.flutterwave.inlinePay(this.paymentData)
  };

  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5)
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
}
