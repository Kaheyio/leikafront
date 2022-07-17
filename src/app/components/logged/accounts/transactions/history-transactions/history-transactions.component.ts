import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';
import { LuluFormatFunctions } from 'src/app/shared/lulu-functions';

@Component({
  selector: 'app-history-transactions',
  templateUrl: './history-transactions.component.html',
  styleUrls: ['./history-transactions.component.scss']
})
export class HistoryTransactionsComponent implements OnInit {

  //LULUONLY display the checkedrejectedtransactions user told to show when checking them
  // checkedrejectedshowinhistory {} = all transactions with checkedrejectedshowinhistory value
  // historytransactiontemplate = [
  //   ///////////////////////////////////////////////////// TEMPLATE
  //   {
  //     title: "",
  //     amount: "",
  //     amountnegative: "",
  //     submissionDate: "",
  //     accountRef: "",         // associated account
  //     transactionType: "",    // ['Card', 'Direct debit', 'Direct credit', 'Wire transfer']
  //     transactionRef: "",     // card number or prelev ref or newmove reason
  //     targetAccount: "",      // target for newmove
  //     transactionStatus: "",  //['Incoming', 'Pending', 'Past', 'Rejected'],

  //     userValidationStatus: "", //['Pending', 'Cancelled', 'Validated']

  //     bankValidationStatus: "",

  //     estimatedDate: "",

  //     // TODO changed categories
  //     category: "", //['Digital', 'Family', 'Groceries', 'Healthcare', 'Housing', 'Leisure', 'Moibility', 'Savings', 'Other']


  //     rejectionReason: "",

  //     // !!!!!!!! ADDED BY LULU NOT IN DB
  //     onlinestatus: true,
  //     usernote: "Had to do this one to get something out of someone but turns out i got reinburesed by someone else 100"
  //   },
  //   ////////////////////////////////////////////////////// END OF TEMPLATE
  // ]

  // historytransactions = [
  //   { // CB online paiement
  //     title: "Amazon Payements Europe S",
  //     amount: "129.99",
  //     amountnegative: true,
  //     submissionDate: "1656594363",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Card",
  //     transactionRef: "5514040338055704",
  //     targetAccount: "",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: true,

  //     estimatedDate: "1656594361",

  //     category: "Groceries",

  //     rejectionReason: "",

  //     onlinestatus: true,
  //     usernote: "Prime Days, sorry honey, I had to buy that 3D ultra 4K hdmi screen..."
  //   },
  //   { // Rejected CB paiement
  //     title: "Amazon Payements Europe S",
  //     amount: "129.99",
  //     amountnegative: true,
  //     submissionDate: "1656594363",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Card",
  //     transactionRef: "5514040338055704",
  //     targetAccount: "",
  //     transactionStatus: "Rejected",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: false,

  //     estimatedDate: "1656594361",

  //     category: "",

  //     rejectionReason: "",

  //     onlinestatus: true,
  //     usernote: ""
  //   },
  //   { //received wire transfer
  //     title: "Piano Guy Pays Back",
  //     amount: "9000.01",
  //     amountnegative: false,
  //     submissionDate: "1656594361",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Direct credit",
  //     transactionRef: "Piano Guy, account n*-5556",
  //     targetAccount: "",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: true,

  //     estimatedDate: "1656594361",

  //     category: "Family",

  //     rejectionReason: "",

  //     onlinestatus: false,
  //     usernote: ""
  //   },
  //   { //self transfer from savings
  //     title: "Piggy break time !",
  //     amount: "0.12",
  //     amountnegative: false,
  //     submissionDate: "1656594368",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Direct credit",
  //     transactionRef: "Savings, account n*-8889",
  //     targetAccount: "",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: true,

  //     estimatedDate: "1656594361",

  //     category: "Savings",

  //     rejectionReason: "",

  //     onlinestatus: false,
  //     usernote: ""
  //   },
  //   { //SEPA prelev
  //     title: "Prelev Sepa Sfr",
  //     amount: "13.50",
  //     amountnegative: true,
  //     submissionDate: "1656594362",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Direct debit",
  //     transactionRef: "June provisions Mandat n*200004",
  //     targetAccount: "",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: true,

  //     estimatedDate: "1656594361",

  //     category: "Digital",

  //     rejectionReason: "",

  //     onlinestatus: false,
  //     usernote: ""
  //   },
  //   { //Newmove
  //     title: "Gave a buck to a bro in need",
  //     amount: "1.00",
  //     amountnegative: true,
  //     submissionDate: "1656594365",
  //     accountRef: "AD1200012030200359100100",
  //     transactionType: "Wire transfer",
  //     transactionRef: "Somenyce Dude, account n*-5556",
  //     targetAccount: "Véronique Griffon ****-5566",
  //     transactionStatus: "Past",

  //     userValidationStatus: "Validated",

  //     bankValidationStatus: true,

  //     estimatedDate: "1656594361",

  //     category: "Leisure",

  //     rejectionReason: "",

  //     onlinestatus: false,
  //     usernote: ""
  //   },
  // ]

  // sortedhistorytoday = this.historytransactions.sort((x: any, y: any) => {
  //   return x.sumbissiontimestamp - y.sumbissiontimestamp;
  // })
  // sortedhistory2 = this.historytransactions.sort((x: any, y: any) => {
  //   return y.sumbissiontimestamp - x.sumbissiontimestamp;
  // })
  // sortedhistory3 = this.historytransactions.sort((x: any, y: any) => {
  //   return x.sumbissiontimestamp - y.sumbissiontimestamp;
  // })

  sortedHistoryTransactions: any;
  accounts: any;
  userData: any;
  userId: any;
  accountRef: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getSortedHistoryTransactions();
  }

  getSortedHistoryTransactions() {
    // this.dataService.getLoggedUserData().subscribe(data => {
    //   this.userData = data;
    //   // console.log(this.userData._id);
    //   // put params to string because the request doesn't take the objectId that is referenced from the schema !!!
    //   // this.userId = this.userData._id.toString();

    // });

    if (sessionStorage.getItem('leikaUID') && sessionStorage.getItem('leikaULK')) {
            
      // TODO: check pb with getting user id from data service, is sometimes undefined
      this.userId = sessionStorage.getItem('leikaUID');

      this.crudService.getTypeRequest('/accounts/user/' + this.userId).subscribe({
        next: (res) => {
          this.accounts = res;
          // console.log(this.accounts);

          // LOOP ON ACCOUNTS
          for (let i = 0; i < this.accounts.length; i++) {
            this.accountRef = this.accounts[i]._id;
            this.accountRef.toString();
            // console.log(this.accountRef);

            // TODO: ACCOUNT REF AND STATUS SHOULD BE DYNAMIC + DEPEND ON ACCOUNT TYPE...
            // ONLY SHOWS TRANSACTIONS FROM CREDIT ACCOUNT BECAUSE NO TRANSACTIONS IN SAVINGS...
            this.crudService.getTypeRequest('/transactions/account/' + this.accountRef + '/status/Past').subscribe({
              next: (res) => {
                this.sortedHistoryTransactions = res;
                // console.log(this.sortedHistoryTransactions);

              },
              error: (err) => {
                console.log(err);
              }
            });
          }
        },
        error: (err) => {
          console.log(err);
        }
      });

    };

  }


formatDate(date: any) {
  let formattedDate = LuluFormatFunctions.formatDate(date);
  
  return formattedDate;
}



  formatAmount(num: any) {
    let formatednum = LuluFormatFunctions.formatAmount(num);
    return formatednum;
  }

}
