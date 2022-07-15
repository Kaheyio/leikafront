import { Component, OnInit } from '@angular/core';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-incoming-transactions',
  templateUrl: './incoming-transactions.component.html',
  styleUrls: ['./incoming-transactions.component.scss']
})
export class IncomingTransactionsComponent implements OnInit {

  // object that from transactionservice gets all transactions with status incoming

  incomingtransactions = [
    { // Incoming CB paiement
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

      category: "",

      rejectionReason: "",

      onlinestatus: true,
      usernote: ""
    },
    { // Incoming CB paiement
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

      category: "",

      rejectionReason: "",

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
