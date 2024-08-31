import { Component, OnInit } from '@angular/core';
import { CPOLoginDTO } from '../cpologin-dto';
import { CpoServicesService } from '../cpo-services.service';
import { CPODetailsClass } from '../cpodetails-class';
import { ActivatedRoute, Router } from '@angular/router';
import { PMServiceService } from '../pm/pmservice.service';
import { ProjectManager } from '../project-manager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpologin : CPOLoginDTO = new CPOLoginDTO();

  projectManager : ProjectManager = new ProjectManager();

  cpoDetails : CPODetailsClass = new CPODetailsClass();

  messageLoginFailed : boolean = true;

  messageLoginDefault : boolean = true;

  typeOfLogin : string= "";
   isLoading = false;

  logins = {
    email : "",
    pasword : "",
  }

  constructor(private cpoServices : CpoServicesService, private router : Router, 
    private ar : ActivatedRoute,
    private pms : PMServiceService
  ) { }

  ngOnInit(): void {
   
  }

  onLogin(): void {
    this.messageLoginDefault = true;
    this.isLoading = true;
    this.messageLoginFailed = true;
    if (this.typeOfLogin === 'cpo') {
      this.cpoServices.login(this.logins.email, this.logins.pasword)
        .subscribe((data: CPODetailsClass) => {
          this.isLoading = false;
          this.cpoDetails = data;
          if(this.cpoDetails === null){
            this.messageLoginFailed = false; 
            this.isLoading = false;
          }else{
            this.messageLoginDefault = false;
            this.messageLoginFailed = true; 
            sessionStorage.setItem('cpoDetails', JSON.stringify(this.cpoDetails));
            this.router.navigate(["/cpo/home/main"])
          }
         
        }, (error) => {
          this.messageLoginDefault = false;
          this.isLoading = false;
          console.error('Login failed:', error);
        });
    
    }else if (this.typeOfLogin === 'pm'){
      this.pms.loginPMService(this.logins.email, this.logins.pasword).subscribe((data : ProjectManager) =>{
                   
        if(data == null){
          this.messageLoginFailed = false;
          this.isLoading = false;
        }else{
          this.isLoading = false;
          this.messageLoginDefault = false;
          this.projectManager.tid = data.tid;
          this.projectManager.email = data.email;
          this.projectManager.name = data.name;
          this.projectManager.phone = data.phone;
          this.projectManager.status = data.status;
          this.messageLoginFailed = true;
          sessionStorage.setItem('projectManager',  JSON.stringify(this.projectManager));
          this.router.navigate(['/pm/home/main']);
        }
      }, err => {
        this.isLoading = true;
        console.log(err);
      });
    }else if (this.typeOfLogin === 'sse'){

    }else if (this.typeOfLogin === 'ssa'){

    }else if (this.typeOfLogin === 'jse'){

    }else if (this.typeOfLogin === 'jsa'){

    }else if (this.typeOfLogin === 'tester'){

    }else if (this.typeOfLogin === 'tester'){
      
    }else{
      this.isLoading = false;
      this.messageLoginDefault=false;
    }
  }

}
