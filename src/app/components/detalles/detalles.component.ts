import { Component, OnInit } from '@angular/core';
import { CubosServices } from 'src/app/service/cubos.service';
import { Cubo } from 'src/app/model/cubo';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public cubo!: Cubo;
  constructor(private _activeRoute: ActivatedRoute,
    private _service: CubosServices) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      var id = parseInt(params['id']);
      this._service.getCubosById(id).subscribe(res=>{
        this.cubo = res;
      })
    })
  }

}
