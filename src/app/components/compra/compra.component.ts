import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/model/cubo';
import { PerfilService } from 'src/app/service/perfil.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private _service:PerfilService) { }

  ngOnInit(): void {
    this._service.getCompra().subscribe(res=>{

    })
  }

}
