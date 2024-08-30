import { Component, OnInit } from '@angular/core';
import { CPOLoginDTO } from '../cpologin-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { CpoServicesService } from '../cpo-services.service';
import { ProjectManagerServicesService } from '../project-manager-services.service';
import { ProjectManager } from '../project-manager';
import { CPODetailsClass } from '../cpodetails-class';

@Component({
  selector: 'app-cpo-home-second',
  templateUrl: './cpo-home-second.component.html',
  styleUrls: ['./cpo-home-second.component.css']
})
export class CpoHomeSecondComponent implements OnInit {

 constructor(private router : Router, private cpoServices: CpoServicesService, private route: ActivatedRoute ,private pms:ProjectManagerServicesService) { }

  cpo : CPOLoginDTO = new CPOLoginDTO();
  
  pmlist : ProjectManager[] = [];

  backendDBManager = false;

  cpoDetails = new CPODetailsClass();
  profile = "";

  id:number = 0;


  ngOnInit(): void {
    const storedCpoDetails = sessionStorage.getItem('cpoDetails');
    if (storedCpoDetails) {
      this.cpoDetails = JSON.parse(storedCpoDetails);
      this.profile = `data:image/jpeg;base64,${this.cpoDetails.img}`;
      this.id = this.cpoDetails.cpo.id;

      this.pms.getAllProjectDetails().subscribe( 
        (res : ProjectManager[]) => {
        
          if(res == null){
            this.backendDBManager = true;
          }
        
        this.pmlist = res.map( items => {
          const pml = new ProjectManager();
          pml.tid = items.tid;
          pml.name = items.name;
          pml.email = items.email;
          pml.phone = items.phone;
          pml.status = items.status;
          pml.project = items.project;
          pml.position = items.position;
          if (items.img) {
            pml.img = `data:image/jpeg;base64,${items.img}`;
          }else{
            pml.img = '';
          }
          
          pml.project.img = `data:image/jpeg;base64,${items.project.img}`;
          
          return pml;
        }

        )
      }, err => {
        console.log(err);
      })

    }else{
      sessionStorage.clear();
      this.router.navigate(['']);
    }

    

  }

  checkStartDate(startdate: Date | null): boolean {
  if (!startdate) {
    return false;
  }
    const currentDate = new Date();
    return new Date(startdate) > currentDate;
  }


}
