import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private getToken = new BehaviorSubject<string>('');

  private newAccountNumberSource$ = new BehaviorSubject<string>('');
  public newAccountNumber = this.newAccountNumberSource$.asObservable();

  constructor() { }

  sendToken(value: string) {
    this.getToken.next(value);
  }

  receiveToken(): Observable<string> {
    return this.getToken.asObservable();
  }

  saveNewAcccountNumber(newAccountNumber: any){
    this.newAccountNumberSource$.next(newAccountNumber)
  }
}
