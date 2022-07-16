import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accountpicker',
  templateUrl: './accountpicker.component.html',
  styleUrls: ['./accountpicker.component.scss']
})
export class AccountpickerComponent implements OnInit {

  userData: any;
  accounts: any;
  constructor(private crudService: CrudService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    // get user data from data service     
    this.dataService.getLoggedUserData().subscribe(data => {
      this.userData = data;
      console.log(this.userData._id);
      
      //TODO: PB APP CRASH + CORS
      // this.crudService.getTypeRequest('/accounts/user/'+ this.userData._id).subscribe(res => {
      //   this.accounts = res;
      //   console.log(this.accounts);
        
      // });

    });

  }

}
