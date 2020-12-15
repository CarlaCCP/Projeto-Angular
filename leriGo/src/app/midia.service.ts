import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MidiaService {

  constructor(private http: HttpClient) { }

  uploadPhoto( file: File) : Observable<any>{
    let data: FormData = new FormData()
    data.append('file', file)
    data.append('upload_preset' , 's7fb0qi2')
    data.append('cloud_name', 'carlacristina')
  
    return this.http.post<any>('https://api.cloudinary.com/v1_1/carlacristina/image/upload', data)
  }
}
