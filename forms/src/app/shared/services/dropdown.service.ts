import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { EstadoBr } from '../model/estado-br.model';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private _http: HttpClient
  ) { }
 
  getEstadosBr() {
    return this._http.get<EstadoBr[]>('assets/dados/estadosbr.json');//.pipe();
  }
}