import { Component, OnInit } from '@angular/core';
import { CPODetailsClass } from '../cpodetails-class';
import { Router } from '@angular/router';
import { ProjectDTO } from '../project-dto';
import { ProductServicesService } from '../product-services.service';
import { ProjectManagerServicesService } from '../project-manager-services.service';

@Component({
  selector: 'app-add-project-manager',
  templateUrl: './add-project-manager.component.html',
  styleUrls: ['./add-project-manager.component.css']
})
export class AddProjectManagerComponent implements OnInit {

  cpoDetails: CPODetailsClass = new CPODetailsClass();
  profile = ""

  messageHider = true;

  message = ""

  cpoid = 0;
  
  projectsArray: ProjectDTO[] = [];

  formData = {
    name : '',
    email : '',
    password : '',
    phone :  0,
    position : '',
    status : '',
    cpo : 0,
    projectId : 0,
  }

  selectedFileImage: File | null = null;

  constructor(private router : Router, private projectService : ProductServicesService, private pmservices : ProjectManagerServicesService) { }

  ngOnInit(): void {
    const storedCpoDetails = sessionStorage.getItem('cpoDetails');
    if (storedCpoDetails) {
      this.cpoDetails = JSON.parse(storedCpoDetails);
      this.profile = `data:image/jpeg;base64,${this.cpoDetails.img}`;
      this.cpoid = this.cpoDetails.cpo.id;
    } else {
      sessionStorage.clear();
      this.router.navigate(['']);
    }

     this.projectService.getAllProjects().subscribe(
      (data: ProjectDTO[]) => {
      
        if(data == null) {
          this.router.navigate(['/cpo/home/project/add']);
        }
    
       this.projectsArray = data.map(item => {
          const project = new ProjectDTO();
          project.tid = item.tid;
          project.pname = item.pname;
          project.description = item.description;
          project.startdate = item.startdate ? new Date(item.startdate) : null;
          project.enddate = item.enddate ? new Date(item.enddate) : null;
          project.client = item.client;
          project.status = item.status;
        
          project.img = `data:image/jpeg;base64,${item.img}`;
          
    
          project.pdf = `data:application/pdf;base64,${item.pdf}`;

          project.cpo = item.cpo;
          
          return project;
        });
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );

  }


  onFileSelectedImage(event: any) {
    this.selectedFileImage = event.target.files[0];
  }

  submittedProjectManager() {
    const formDatas = new FormData();
    formDatas.append("name", this.formData.name);
    formDatas.append("email", this.formData.email);
    formDatas.append("password", this.formData.password); 
    formDatas.append("phone", this.formData.phone.toString());
    formDatas.append("position", this.formData.position);
    formDatas.append("status", this.formData.status);
    formDatas.append("cpo", this.cpoid.toString());
    formDatas.append("projectId", this.formData.projectId.toString());
    if (this.selectedFileImage) {
        formDatas.append("img", this.selectedFileImage);
    }

    this.pmservices.addProjectManager(formDatas).subscribe(data => {
        this.messageHider = false;
        this.message = "Project Manager added successfully ; " + data.projectId + " Manager : " + data.name
    }, err => {
        console.log(err);
    });
  }

 


}
