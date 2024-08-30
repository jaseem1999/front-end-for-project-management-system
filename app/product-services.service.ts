import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDTO } from './project-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private baseURL = "http://localhost:8080/api/project/";

  constructor(private httpClient: HttpClient) { }

  public addProduct(formData: any) : Observable<any> {
    return this.httpClient.post(`${this.baseURL}save`, formData);
  }

  getAllProjects(): Observable<ProjectDTO[]> {
    return this.httpClient.get<ProjectDTO[]>(`${this.baseURL}get/all`);
  }

  updateStatus(id: number, status: string): Observable<ProjectDTO> {
  const params = new HttpParams()
    .set('id', id.toString())
    .set('status', status);

  return this.httpClient.put<ProjectDTO>(`${this.baseURL}status/update`, null, { params });
}



}
