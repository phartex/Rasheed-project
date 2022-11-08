import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  loading$ = this.loader.loading$;
  rawObject: any;
  amountAndMeterNo: any;
  historyData? : any[];
  constructor(private transactionService : TransactionService,
    private loader : LoaderService
    ) { }

  ngOnInit(): void {
    this.rawObject = sessionStorage.getItem('amountAndMeterNo');
    this.amountAndMeterNo = JSON.parse(this.rawObject);
    console.log(this.amountAndMeterNo);
    this.getHistory();
  }



  getHistory() {

    this.transactionService.queryMeterCredit(this.amountAndMeterNo.meterNo)
      .subscribe((data) => {
       
       this.historyData = data.slice(0,10);
       console.log(this.historyData);
      })

  }

}
