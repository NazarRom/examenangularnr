import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Login } from "../model/login";
@Injectable()
export class CubosServices {
    constructor(private _http: HttpClient) { }


    getMarcasCubo(): Observable<any> {
        var request = "/api/Cubos/Marcas";
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getAllCubos(): Observable<any> {
        var request = "/api/Cubos";
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getCubosByMarca(marca: string): Observable<any> {
        var request = "/api/Cubos/CubosMarca/" + marca;
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getCubosById(id: number): Observable<any> {
        var request = "/api/Cubos/" + id;
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getTokenLogin(login:Login): Observable<any> {
        var request = "/api/Manage/Login";
        var url = environment.urlApiCubos + request;
        var json = JSON.stringify(login);
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(url, json, { headers: header });
    }
}
