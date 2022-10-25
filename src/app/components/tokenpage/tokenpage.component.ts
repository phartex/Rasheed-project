import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { DataserviceService } from '../../services/dataservice.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-tokenpage',
  templateUrl: './tokenpage.component.html',
  styleUrls: ['./tokenpage.component.scss']
})
export class TokenpageComponent implements OnInit {
  rawObject: any;
  amountAndMeterNo: any;
  tokenNumber: any;
  loading$ = this.loader.loading$;
  details :any;
  constructor(private transactionservice: DataserviceService,
    private transactionService: TransactionService,
    private loader : LoaderService
  ) { }

  ngOnInit(): void {
    this.rawObject = sessionStorage.getItem('amountAndMeterNo');
    this.amountAndMeterNo = JSON.parse(this.rawObject);
    console.log(this.amountAndMeterNo)
    this.getVendingMeterInfo();
  }

  getToken() {
    console.log('hdhdh')
    // this.transactionservice.newAccountNumber.subscribe(data => console.log(data))
  }

  getVendingMeterInfo() {

    this.transactionService.getVendingMeterDetails(this.amountAndMeterNo.meterNo, this.amountAndMeterNo.amount)
      .subscribe((data) => {
        if (data.length != 0) {
          this.details = data;
          data.map((item) => {
            this.tokenNumber = item.Token;
          })
         
        } 
      })

  }
}
