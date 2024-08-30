import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectManager } from '../project-manager';
import { TeamDTO } from '../team-dto';

@Injectable({
  providedIn: 'root'
})
export class PMServiceService {

  private baseURL = "http://localhost:8080/api/pm/";

  constructor(private httpClient : HttpClient) { }

  public loginPMService(email: string, password: string) : Observable<ProjectManager> {
    return this.httpClient.get<ProjectManager>(`${this.baseURL}login/${email}/${password}`);
  } 

  public getById(id: number): Observable<ProjectManager> {
    return this.httpClient.get<ProjectManager>(`${this.baseURL}get?id=${id}`);
  }

  public logout(id: number): Observable<ProjectManager>{
    return this.httpClient.put<ProjectManager>(`${this.baseURL}logout/${id}`, {})
  }

  public addTeam(formData: FormData): Observable<TeamDTO> {
    return this.httpClient.post<TeamDTO>("http://localhost:8080/api/pm/control/team/add", formData);
  }

  public getTeamByPMId(pmId: string): Observable<TeamDTO[]>{
    return this.httpClient.get<TeamDTO[]>(`http://localhost:8080/api/pm/control/team/get/${pmId}`);
  }


}
