import { Component, OnInit } from '@angular/core';
import { PMServiceService } from '../pmservice.service';
import { ProjectManager } from 'src/app/project-manager';
import { CPODetailsClass } from 'src/app/cpodetails-class';
import { map, switchMap } from 'rxjs';
import { CpoServicesService } from 'src/app/cpo-services.service';
import { Router } from '@angular/router';
import { TeamDTO } from 'src/app/team-dto';

@Component({
  selector: 'app-pm-manage-team',
  templateUrl: './pm-manage-team.component.html',
  styleUrls: ['./pm-manage-team.component.css']
})
export class PMManageTeamComponent implements OnInit {
  projectManager : ProjectManager = new ProjectManager();

  teamMembers : TeamDTO[] = []

  hiddenStatus : boolean = false;

  isLoading = false;

  showAllTeamMembers = false;

  cpoOfficer : CPODetailsClass = new CPODetailsClass(); 
  notificationsshow = true;
  copid = 0;
  profile = "";
  cpoProfile = "";
  projectImage = "";

  constructor(private pms : PMServiceService,
    private cpoService : CpoServicesService,
    private router : Router
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
      this.isLoading = true;
      this.teamGetPM();
    } else {
      sessionStorage.clear();
      this.router.navigate(['']);
    }
  }

  teamGetPM(){
    this.pms.getTeamByPMId(String(this.projectManager.tid)).subscribe(
        (team : TeamDTO[]) => {
         
          if (team === null){
            this.showAllTeamMembers = true;
            this.isLoading = false;
          }else{
             this.teamMembers = team.map( item => {
              this.isLoading = false;
              let teamM = new TeamDTO();
              teamM = item;
              teamM.img = `data:image/jpeg;base64,${item.img}`;
              return teamM;
            })   
        }
        
      })
  }

  statusOn(tid: number): void {
    this.teamMembers.forEach(member => {
      if (member.tid === tid) {
        this.hiddenStatus = true;
        member.hiddenStatus = !member.hiddenStatus;
      } else {
        member.hiddenStatus = true;
      } 
    });
  }

  selectStatus(newStatus: string, tid: number): void {
    if (newStatus === 'active') {
        this.pms.updateTeamMemberUnBlock(String(tid)).subscribe(data => {
            if (data != null) {
                const team = this.teamMembers.find(member => member.tid === tid);
                if (team) {
                    team.status = null; 
                    team.hiddenStatus = true; 
                }
            } else {
                console.log('Unexpected response:', data);
            }
        });
    } else {
        this.pms.updateTeamMemberBlock(String(tid)).subscribe(data => {
            if (data != null) {
                const team = this.teamMembers.find(member => member.tid === tid);
                if (team) {
                  team.status = 'blocked'; 
                  team.hiddenStatus = true; 
                }
            } else {
              console.log('Unexpected response:', data);
            }
        });
    }

    this.teamMembers.forEach(member => {
        if (member.tid === tid) {
          member.hiddenStatus = true;
       }
    });
  }


}
