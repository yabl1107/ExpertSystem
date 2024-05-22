import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MyResponse} from './interfaces'
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/630';
  private diagApi = 'http://127.0.0.1:5000/prolog';
  private symptomsApi = 'http://127.0.0.1:5000/prolog/getSymptoms';
  private diseasesApi = 'http://127.0.0.1:5000/prolog/getDiseases';

  constructor(private http: HttpClient) { }

    public getSintomas(): Observable<MyResponse>{
      return this.http.get<MyResponse>(this.symptomsApi);
    }
    public getEnfermedades(): Observable<MyResponse>{
      return this.http.get<MyResponse>(this.diseasesApi);
    }

    postData(data:any): Observable<MyResponse>{
      return this.http.post<MyResponse>(this.diagApi, data)
    }

}
