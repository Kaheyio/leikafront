import { Component, OnInit } from '@angular/core';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-uncheckedrejected-transactions',
  templateUrl: './uncheckedrejected-transactions.component.html',
  styleUrls: ['./uncheckedrejected-transactions.component.scss']
})
export class UncheckedrejectedTransactionsComponent implements OnInit {

 // transform into object that from transactionservice gets all transactions with status rejected AND property checked false

  uncheckedrejectedtransactions = [
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
    { // Rejected CB paiement
      title: "Amazon Payements Europe S",
      amount: "129.99",
      amountnegative: true,
      submissionDate: "1656594363",
      accountRef: "AD1200012030200359100100",
      transactionType: "Card",
      transactionRef: "5514040338055704",
      targetAccount: "",
      transactionStatus: "Rejected",

      userValidationStatus: "Validated",

      bankValidationStatus: false,

      estimatedDate: "1656594361",

      category: "",

      rejectionReason: "Insufficient funds.",

      onlinestatus: true,
      usernote: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // LULU through databaseCRUDservice, change transaction "checked" property to true
  // LULU checkedrejected(){}

  formatAmount(num: any) {
    let formatednum = LuluFormatFunctions.formatAmount(num);
    return formatednum;
  }

}
