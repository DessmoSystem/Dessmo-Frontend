import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const httpOptions2 = { 
  params: new HttpParams({
    fromObject:{    
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }    
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';

  aux = new File([], '');

  constructor(private http: HttpClient) { }

  UploadData(id:any, ex:File): Observable<any> {

    var archivo: FormData = new FormData();

    if (ex != null) {
      archivo.append('excel', ex);
    }else {
      archivo.append('excel', this.aux);
    }
    
    return this.http.post(
      this.API_URL+`admin/${id}/data/upload`,  
      archivo,
      httpOptions2
    )
  }

}

