import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WarnService {

constructor(private http: HttpClient) { }

getTextwarn(message: string) {
  console.log(message);
}

getUserList(): Observable<any> {
  return this.http.get('https://reqres.in/api/users');
}
}
