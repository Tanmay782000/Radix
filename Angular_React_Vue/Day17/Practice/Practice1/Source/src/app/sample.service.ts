import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  myurl:any="https://gorest.co.in/public/v2"
  token:any="34640e87a5e1ff773a7f5da05acdfbd31799d491cd9cddea48e4ed9a6904663b"
  constructor(private http:HttpClient) { }
  getuser()
  {
    return this.http.get(`${this.myurl}/users`)
  }
  postdata(value:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`
      })
    }
    return this.http.post(`${this.myurl}/users`,value,httpOptions)
  }
  update(data:any,id:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`
      })
    }
    return this.http.put(`${this.myurl}/users/${id}`,data,httpOptions)
  }
}
