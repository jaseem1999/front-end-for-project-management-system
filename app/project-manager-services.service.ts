import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectManager } from './project-manager';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerServicesService {
  private baseURL = "http://localhost:8080/api/pm/";

  constructor(private httpClient: HttpClient) { }

  addProjectManager(formData : any) : Observable<any> {
    return this.httpClient.post(`${this.baseURL}add`, formData)
  }

  getAllProjectDetails() : Observable<ProjectManager[]> {
    return this.httpClient.get<ProjectManager[]>(`${this.baseURL}get/all`);
  }

}
