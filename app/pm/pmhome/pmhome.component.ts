import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectManager } from 'src/app/project-manager';
import { PMServiceService } from '../pmservice.service';
import { CpoServicesService } from 'src/app/cpo-services.service';
import { switchMap } from 'rxjs';
import { CPODetailsClass } from 'src/app/cpodetails-class';

@Component({
  selector: 'app-pmhome',
  templateUrl: './pmhome.component.html',
  styleUrls: ['./pmhome.component.css']
})
export class PMHomeComponent implements OnInit {
  projectManager : ProjectManager = new ProjectManager();

  cpoOfficer : CPODetailsClass = new CPODetailsClass(); 

  notificationsshow = true;
  copid = 0;
  profile = "";
  cpoProfile = "";
  projectImage = "";

  logoutUser = true;

  constructor(private router : Router,
    private pms : PMServiceService,
    private cpoService : CpoServicesService,
  ) { }

 ngOnInit(): void {
    const projectM = sessionStorage.getItem('projectManager');
    if (projectM) {
      this.projectManager = JSON.parse(projectM);

      this.pms.getById(this.projectManager.tid).pipe(
        switchMap(data => {
          this.projectManager = data;
          this.profile = `data:image/jpeg;base64,${data.img}`;
          this.projectImage = `data:image/jpeg;base64,${data.project.img}`;
          // Return the cpoService observable to be processed in the next step
          return this.cpoService.getByCpo(this.projectManager.cpo.id);
        })
      ).subscribe(
        (cpo) => {
          this.cpoOfficer = cpo;
          this.cpoProfile = `data:image/jpeg;base64,${this.cpoOfficer.img}`;
        },
        err => {
          console.log(err);
        }
      );


      

    } else {
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

  home(){
    this.router.navigate(["/pm/home/main"]);
  }

  addTeam(){
    this.router.navigate(["/pm/home/add/team"]);
  }

  manageTeam(){
    this.router.navigate(["/pm/home/manage/team"]);
  }

  communicateTeam(){
    this.router.navigate(["/pm/home/communicate/team"]);
  }

  addTask(){
    this.router.navigate(["/pm/home/add/task"]);
  }

  manageTask(){
    this.router.navigate(["/pm/home/manage/task"]);
  }

  communicateCpo(){
    this.router.navigate(["/pm/home/cpo/speak"]);
  }

  settings(){
    this.router.navigate(["/pm/home/settings"]);
  }


  logout(){
    this.logoutUser = false;
    this.pms.logout(this.projectManager.tid).subscribe(data =>
    {
      if(data != null){
        this.logoutUser = true;
        sessionStorage.clear();
        this.router.navigate(['']);
      }
    }, err => {
      this.logoutUser = true;
      console.log(err);
    }
    )
  }

}
