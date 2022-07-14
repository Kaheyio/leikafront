import { Component, OnInit } from '@angular/core';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-pending-leikode-transactions',
  templateUrl: './pending-leikode-transactions.component.html',
  styleUrls: ['./pending-leikode-transactions.component.scss']
})
export class PendingLeikodeTransactionsComponent implements OnInit {

  // object that from transactionservice gets all transactions with status pending

  pendingleikodetransactions = [
    { // Pending CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Past",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "Incoming",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  formatAmount(num: any) {
    let formatednum = LuluFormatFunctions.formatAmount(num);
    return formatednum;
  }

}
