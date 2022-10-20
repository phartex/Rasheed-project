import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { LoaderService } from 'src/app/services/loader.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from "flutterwave-angular-v3"

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  requestForm!: FormGroup;
  fullDetails: boolean = false;
  buttonTextChange: boolean = false;
  meterErrorMessage? : string = "";
  loading$ = this.loader.loading$;
  publicKey = "FLWPUBK_TEST-e49cf6315111eb44cdd54c8c4384b599-X";
 
  customerDetails = { name: 'Demo Customer  Name', email: 'customer@mail.com', phone_number: '08100000000'}
 
  customizations = {title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-colored.svg'}
 
  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}
 
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
  }

  constructor(
    private loader: LoaderService,
    private fb: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private notification: NotificationService,
    private flutterwave : Flutterwave
  ) { }

  ngOnInit(): void {
    this.createPinFormAction();

  };

  makePayment(){
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
  // inputHandle(event : any) {
  //   var number = event.target.value;


  //   if (number) {
  //     console.log(number)
  //     this.sendAmount();
  //   } else {

  //   }
  // }

  createPinFormAction() {
    this.requestForm = this.fb.group({
      phoneNo: ['',],
      meterNo: ['', Validators.required],
      amount: ['', Validators.required],
      meterName: ['',],
      address: ['',],
    });
  }
  // this.notificationService.showNotification(
  //   'success',
  //   'your form has been submitted',
  //   'Dismiss'
  // );

  // CompanyName: "Lion-Edge",
  //     UserName: "Harbdulrashyd",
  //     PassWord: "123456",
  //     MeterId: "58100990298",
  //     is_vend_by_unit: "false",
  //     Amount: 1800
  getDetails() {
    // this.notification.showNotification(
    //   'error',
    //   'your form has been submitted',
    //   'Dismiss')
    this.transactionService.queryMeter(this.requestForm.value.meterNo, this.requestForm.value.amount)
      .subscribe((data) => {
      
        console.log(data);
        if (data.length === 0) {
          
          this.meterErrorMessage  = `Meter Id ${this.requestForm.value.meterNo} doesn't exist`;
          setTimeout(() => {
            this.meterErrorMessage  = '';
          }, 6000);
          this.requestForm.reset();
        } else {
          this.fullDetails = true;
          data.map((item) => {
            this.requestForm.patchValue({
              phoneNo: item.Customer_phone,
              address: item.Customer_address,
              meterName: item.Meter_type
            })
          })
          this.buttonTextChange = true;
        }

      });
  };

  
  submitForm() {
    this.transactionService.sendAmount(this.paymentData)
   console.log('going')
  }

  toggleForm() {

    this.fullDetails = !this.fullDetails;
  }
}
