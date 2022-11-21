import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Cubo } from 'src/app/model/cubo';
import { CubosServices } from 'src/app/service/cubos.service';
@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
public cubos!: Array<Cubo>;
  constructor(private _service:CubosServices,
      private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var marca = params['marca'];
      this._service.getCubosByMarca(marca).subscribe(res=>{
        this.cubos = res;
      })
    })
  }

}
