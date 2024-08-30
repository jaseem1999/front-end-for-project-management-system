import { Component, OnInit } from '@angular/core';
import { CPODetailsClass } from '../cpodetails-class';
import { ActivatedRoute, Router } from '@angular/router';
import { CpoServicesService } from '../cpo-services.service';
import { CPOLoginDTO } from '../cpologin-dto';
import { ProjectManagerServicesService } from '../project-manager-services.service';
import { ProjectManager } from '../project-manager';

@Component({
  selector: 'app-cpo-home',
  templateUrl: './cpo-home.component.html',
  styleUrls: ['./cpo-home.component.css']
})
export class CpoHomeComponent implements OnInit {

  constructor(private router : Router, private cpoServices: CpoServicesService, private route: ActivatedRoute ,private pms:ProjectManagerServicesService) { }

  cpo : CPOLoginDTO = new CPOLoginDTO();

  pm : ProjectManager = new ProjectManager();

  cpoDetails = new CPODetailsClass();
  profile = "";

  logoutStatus = true;

  id:number = 0;

  notificationsshow = true;
  projectShow = true;
  
  ngOnInit(): void {
    const storedCpoDetails = sessionStorage.getItem('cpoDetails');
    if (storedCpoDetails) {
      this.cpoDetails = JSON.parse(storedCpoDetails);
      this.profile = `data:image/jpeg;base64,${this.cpoDetails.img}`;
      this.id = this.cpoDetails.cpo.id;

      this.pms.getAllProjectDetails().subscribe(res => {
        

      }, err => {
        console.log(err);
      })

    }else{
      sessionStorage.clear();
      this.router.navigate(['']);
    }


  }

  showNotifications(){
    if(this.notificationsshow){
      this.notificationsshow = false;
    }else{
      this.notificationsshow = true;
    }
  }

  showProjectMenu(){
    if(this.projectShow){
      this.projectShow = false;
    }else{
      this.projectShow = true;
    }
  }

  addProject() {
    this.router.navigate(['/cpo/home/project/add']);
  }


  addProjectManager(){
    this.router.navigate(['/cpo/home/project/manager/add']);
  }

  viewCpoAllProjects(){
    this.router.navigate(['/cpo/home/project/view']);
  }

  showTask(){
   this.router.navigate(['/cpo/home/task']);
  }

  addNotification(){
    this.router.navigate(['/cpo/home/notification/add']);
  }

  inboxProjectManager(){
    this.router.navigate(['/cpo/home/project/manager/inbox']);
  }

  settings(){
    this.router.navigate(['/cpo/home/settings']);
  }

  home(){
    this.router.navigate(['/cpo/home/main']);
  }

  logout(){
    this.logoutStatus = false;
    this.cpoServices.logout(this.id).subscribe(data =>
    {

      const cpologout= data;
      if(cpologout != null){
        this.logoutStatus = true;
        sessionStorage.clear();
        this.router.navigate([""]);
      }else{
        console.log("Not logged out");
        this.logoutStatus = true;
      }
    })
  }




  

  

}
