import { Component, OnInit } from '@angular/core';
import { CubosServices } from 'src/app/service/cubos.service';
import { Cubo } from 'src/app/model/cubo';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  public cubos!: Array<Cubo>
  constructor(private _services: CubosServices) { }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this._services.getMarcasCubo().subscribe(res => {
      this.marcas = res;
    })
  }

}
