import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Perfil } from "../model/perfil";
@Injectable()
export class PerfilService {
    constructor(private _http: HttpClient) { }

    getPerfilUsuario(): Observable<any> {

        var token = localStorage.getItem('token');
        var header = new HttpHeaders().set('Authorization', 'bearer ' + token);
        var request = "/api/Manage/PerfilUsuario";
        var url = environment.urlApiCubos + request;
        return this._http.get(url, { headers: header });

    }

    registerUsuario(perfil: Perfil): Observable<any> {
        var request = "/api/Manage/RegistroUsuario";
        var url = environment.urlApiCubos + request;
        var json = JSON.stringify(perfil);
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(url, json, { headers: header });

    }

    getCompra():Observable<any>{
        var request = "/api/Compra/ComprasUsuario";
        var url = environment.urlApiCubos + request;
        return this._http.get(url);

    }
}