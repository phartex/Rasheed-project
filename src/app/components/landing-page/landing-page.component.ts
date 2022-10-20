import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  requestForm!: FormGroup;
  fullDetails: boolean = false;
  buttonTextChange: boolean = false;
  meterErrorMessage?: string = "";
  loading$ = this.loader.loading$;


  constructor(
    private loader: LoaderService,
    private fb: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.createPinFormAction();

  };

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
    this.transactionService.sendAmount(this.requestForm.value.meterNo, this.requestForm.value.amount)
      .subscribe((data) => {

        console.log(data);
        if (data.length === 0) {
          this.meterErrorMessage = `Meter Id ${this.requestForm.value.meterNo} doesn't exist`;
          setTimeout(() => {
            this.meterErrorMessage = '';
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
    console.log('going')
  }

  toggleForm() {

    this.fullDetails = !this.fullDetails;
  }
}
