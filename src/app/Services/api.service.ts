import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
url="https://localhost:7167/api/"
public async get(controller:string){
  var response:any
    await this.http.get(this.url+controller).toPromise().then((res)=>{
      response=res
      console.log(res);
    })

        return response
   }

   async getById(controller:string,id:string){    
    return this.http.get(this.url+controller+"/"+id).subscribe((res)=>{
      console.log(res);
    });    
   }

   async post(body:any,controller:string){
    return this.http.post(body,this.url+controller).subscribe((res)=>{
      console.log(res)
    });
   }

   async put(body:any,controller:string,id:string){
    return this.http.put(body,this.url+controller+"/"+id).subscribe((res)=>{
      console.log(res);
    });
   }
   
   async delete(controller:string,id:string){
      return this.http.delete(this.url+controller+"/"+id).subscribe((res)=>{
        console.log(res);
      });

   }
}