import { Component, OnInit } from '@angular/core';
import { CPODetailsClass } from '../cpodetails-class';
import { Router } from '@angular/router';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
   addSuccess= true;

  cpoDetails: CPODetailsClass = new CPODetailsClass();
  profile: string = "";

  formData = {
    pname: "",
    pdescription: "",
    startDate: "",
    endDate: "",
    status: "",
    client: "",
  }

  selectedFileImage: File | null = null;
  selectedFilesPdf: File | null = null;

  constructor(private router: Router, private projectservice: ProductServicesService) { }

  ngOnInit(): void {
    const storedCpoDetails = sessionStorage.getItem('cpoDetails');
    if (storedCpoDetails) {
      this.cpoDetails = JSON.parse(storedCpoDetails);
      this.profile = `data:image/jpeg;base64,${this.cpoDetails.img}`;
    } else {
      sessionStorage.clear();
      this.router.navigate(['']);
    }
  }

  onFileSelectedImage(event: any) {
    this.selectedFileImage = event.target.files[0];
  }

  onFileSelectedPdf(event: any) {
    this.selectedFilesPdf = event.target.files[0];
  }

  ngSubmitproject() {
    const formData = new FormData();
    formData.append('id', this.cpoDetails.cpo.id.toString());
    formData.append('pname', this.formData.pname);
    formData.append('pdescription', this.formData.pdescription);
    formData.append('startDate', new Date(this.formData.startDate).toISOString());
    formData.append('endDate', new Date(this.formData.endDate).toISOString());
    formData.append('status', this.formData.status);
    formData.append('client', this.formData.client);

    if (this.selectedFileImage) {
      formData.append('profileImage', this.selectedFileImage);
    }

    if (this.selectedFilesPdf) {
      formData.append('projectDocuments', this.selectedFilesPdf);
    }

    this.projectservice.addProduct(formData).subscribe(
      data => {
        this.addSuccess = false;
      },
      err => {
        console.error('Error saving project', err);
      }
    );
  }
}
