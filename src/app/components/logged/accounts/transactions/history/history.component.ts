import { Component, OnInit } from '@angular/core';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  //LULUONLY display the checkedrejectedtransactions user told to show when checking them
  // checkedrejectedshowinhistory {} = all transactions with checkedrejectedshowinhistory value
  transactiontemplate = [
    ///////////////////////////////////////////////////// TEMPLATE
    {
      title: "",
      amount: "",
      amountnegative: "",
      submissionDate: "",
      accountRef: "",         // associated account
      transactionType: "",    // ['Card', 'Direct debit', 'Direct credit', 'Wire transfer']
      transactionRef: "",     // card number or prelev ref or newmove motif
      targetAccount: "",      // target for newmove
      transactionStatus: "",  //['Incoming', 'Pending', 'Past', 'Rejected'],

      userValidationStatus: "", //['Pending', 'Cancelled', 'Validated']

      bankValidationStatus: "",

      estimatedDate: "",

      category: "", //['Groceries', 'Routine', 'Children and School', 'Healthcare', 'Housing', 'Mobility', 'Digital', 'Pets', 'Taxes', 'Other', 'Savings']

      rejectionMotif: "",

      // !!!!!!!! ADDED BY LULU NOT IN DB
      onlinestatus: true,
      usernote: "Had to do this one to get something out of someone but turns out i got reinburesed by someone else 100"
    },
    ////////////////////////////////////////////////////// END OF TEMPLATE
  ]

  historytransactions = [
    { // CB online paiement
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

      bankValidationStatus: true,

      estimatedDate: "1656594361",

      category: "Groceries",

      rejectionMotif: "",

      onlinestatus: true,
      usernote: "Prime Days, sorry honey, I had to buy that 3D ultra 4K hdmi screen..."
    },
    { //received wire transfer
      title: "Piano Guy Pays Back",
      amount: "9999999999999999.01",
      amountnegative: false,
      submissionDate: "1656594361",
      accountRef: "AD1200012030200359100100",
      transactionType: "Direct credit",
      transactionRef: "Piano Guy, account n*-5556",
      targetAccount: "",
      transactionStatus: "Past",

      userValidationStatus: "Validated",

      bankValidationStatus: true,

      estimatedDate: "1656594361",

      category: "Other",

      rejectionMotif: "",

      onlinestatus: false,
      usernote: ""
    },
    { //SEPA prelev
      title: "Prelev Sepa Sfr",
      amount: "13.50",
      amountnegative: true,
      submissionDate: "1656594362",
      accountRef: "AD1200012030200359100100",
      transactionType: "Direct debit",
      transactionRef: "June provisions Mandat n*2000040",
      targetAccount: "",
      transactionStatus: "Past",

      userValidationStatus: "Validated",

      bankValidationStatus: true,

      estimatedDate: "1656594361",

      category: "Routine",

      rejectionMotif: "",

      onlinestatus: false,
      usernote: ""
    },
    { //Newmove
      title: "Gave a buck to a bro in need",
      amount: "1.00",
      amountnegative: true,
      submissionDate: "1656594365",
      accountRef: "AD1200012030200359100100",
      transactionType: "Wire transfer",
      transactionRef: "Somenyce Dude, account n*-5556",
      targetAccount: "Véronique Griffon ****-5566",
      transactionStatus: "Past",

      userValidationStatus: "Validated",

      bankValidationStatus: true,

      estimatedDate: "1656594361",

      category: "Other",

      rejectionMotif: "",

      onlinestatus: false,
      usernote: ""
    },
  ]

  sortedhistorytoday = this.historytransactions.sort((x: any, y: any) => {
    return x.sumbissiontimestamp - y.sumbissiontimestamp;
  })
  sortedhistory2 = this.historytransactions.sort((x: any, y: any) => {
    return y.sumbissiontimestamp - x.sumbissiontimestamp;
  })
  sortedhistory3 = this.historytransactions.sort((x: any, y: any) => {
    return x.sumbissiontimestamp - y.sumbissiontimestamp;
  })

  constructor() { }

  ngOnInit(): void {
  }

  formatAmount(num: any) {
    let formatednum = LuluFormatFunctions.formatAmount(num);
    return formatednum;
  }

}
