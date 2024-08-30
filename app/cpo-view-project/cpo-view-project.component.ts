import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';
import { ProjectDTO } from '../project-dto';
import { Router } from '@angular/router';
import { CPODetailsClass } from '../cpodetails-class';

@Component({
  selector: 'app-cpo-view-project',
  templateUrl: './cpo-view-project.component.html',
  styleUrls: ['./cpo-view-project.component.css']
})
export class CpoViewProjectComponent implements OnInit {

  projectsArray: ProjectDTO[] = [];

  databaseNull = false;

  cpoDetails: CPODetailsClass = new CPODetailsClass();
  profile = ""
  

  constructor(private projectService: ProductServicesService, private router : Router) { }



  ngOnInit(): void {

    const storedCpoDetails = sessionStorage.getItem('cpoDetails');
    if (storedCpoDetails) {
      this.cpoDetails = JSON.parse(storedCpoDetails);
      this.profile = `data:image/jpeg;base64,${this.cpoDetails.img}`;
    } else {
      sessionStorage.clear();
      this.router.navigate(['']);
    }

    this.projectService.getAllProjects().subscribe(
      (data: ProjectDTO[]) => {
        
        if(data == null) {
          this.databaseNull = true;
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

  statusUpdate(id: number, status: string) {
  this.projectService.updateStatus(id, status).subscribe(
    updatedProject => {
      // Find the project in the array by ID and update its status
      const project = this.projectsArray.find(p => p.tid === id);
      if (project) {
        project.status = updatedProject.status;
      }
    },
    error => {
      console.error('Error updating status', error);
    }
  );
}

}
