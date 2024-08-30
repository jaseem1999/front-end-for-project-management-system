import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CPODetailsClass } from './cpodetails-class';
import { Observable } from 'rxjs';
import { CPOLoginDTO } from './cpologin-dto';

@Injectable({
  providedIn: 'root'
})
export class CpoServicesService {
  private baseURL = "http://localhost:8080/api/cpo/log/";

  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string): Observable<CPODetailsClass> {
    return this.httpClient.get<CPODetailsClass>(`${this.baseURL}cpo/login/${email}/${password}`);
  }

  public logout(id: number): Observable<CPOLoginDTO> {
    return this.httpClient.put<CPOLoginDTO>(`${this.baseURL}cpo/logout/${id}`, {});
  }

  public getByCpo(id : number): Observable<CPODetailsClass> {
    return this.httpClient.get<CPODetailsClass>(`${this.baseURL}get/id/${id}`);
  }
  


}
