import { Injectable } from '@angular/core';
import { ISendAmount } from '../model/ITransaction';

@Injectable({
  providedIn: 'root'
})
export class RemitaService {
  // const body: ISendAmount = {
  //   CompanyName: "Lion-Edge",
  //   UserName: "Harbdulrashyd",
  //   PassWord: "123456",
  //   MeterId,
  //   is_vend_by_unit: "false",
  //   Amount
  // };
  constructor() { }


//   function makePayment() {
//     var form = document.querySelector("#payment-form");
//     var paymentEngine = RmPaymentEngine.init({
//         key: 'cmFzaG1hbjAwMkBob3RtYWlsLmNvbXwxMTAwNDk2ODExNzF8OTM5YjcxMTViMmRmNTI5NjY2MTA3ZWQzNjA1NzA5MGQwMTg2YjhkNTNmNjExMzI0OWZmOGIyZjcyMWFjOGM3ZWU3MDQ0NTE0MGUyNDU5NjU2MGU5MjU5YjgyY2RhMDAzMDJmNzgxNDA5MDYwYzRjNGZjM2IzZmM2MmE0YWQxM2Y=',
//         customerId: 'habdurasheed@gmail.com',
//         firstName: form.querySelector('input[name="firstName"]').value,
//         lastName: form.querySelector('input[name="lastName"]').value,
//         email: 'habdurasheed@gmail.com',
//         amount: form.querySelector('input[name="amount"]').value,
//         narration: form.querySelector('input[name="narration"]').value,
//         onSuccess: function (response) {
//             console.log('callback Successful Response', response);
//         },
//         onError: function (response) {
//             console.log('callback Error Response', response);
//         },
//         onClose: function () {
//             console.log("closed");
//         }
//     });
//      paymentEngine.showPaymentWidget();
// }
}
