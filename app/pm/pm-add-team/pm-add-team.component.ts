import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CPODetailsClass } from 'src/app/cpodetails-class';
import { ProjectManager } from 'src/app/project-manager';
import { PMServiceService } from '../pmservice.service';
import { CpoServicesService } from 'src/app/cpo-services.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pm-add-team',
  templateUrl: './pm-add-team.component.html',
  styleUrls: ['./pm-add-team.component.css']
})
export class PMAddTeamComponent implements OnInit {

  projectManager : ProjectManager = new ProjectManager();

  cpoOfficer : CPODetailsClass = new CPODetailsClass(); 

  alertAdded : boolean = true;
  alertAddedFailure : boolean = true;

   isLoading = false;

  selectedFileImage: File | null = null;

  notificationsshow = true;
  copid = 0;
  profile = "";
  cpoProfile = "";
  projectImage = "";

  formData = {
    name: "",
    email : "",
    password : "",
    phone : 0,
    position : "",
  }

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

  onFileSelectedImage(event: any) {
    this.selectedFileImage = event.target.files[0];
  }

  addTeamMember(){

    this.isLoading = true; // Start spinner

    this.alertAdded =true;
    this.alertAddedFailure = true;

    const data = new FormData();
    data.append("pmid", String(this.projectManager.tid))
    data.append("name", this.formData.name)
    data.append("email", this.formData.email)
    data.append("password", this.formData.password)
    data.append("phone", String(this.formData.phone))
    data.append("position", this.formData.position)

    if (this.selectedFileImage) {
      data.append("img", this.selectedFileImage);
    }

    this.pms.addTeam(data).subscribe(data => {
      this.isLoading = false;
      if(data != null) {
        this.alertAdded = false;
      }else {
        this.alertAddedFailure = false;
      }
    }, err => {
      this.isLoading = false;
      this.alertAddedFailure = false;
      console.log("Jaseem "+err); 
    }
    )

  }

}
