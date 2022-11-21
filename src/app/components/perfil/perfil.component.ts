import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/perfil.service';
import { Perfil } from 'src/app/model/perfil';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public perfil!: Perfil
  constructor(private _service: PerfilService) { }

  ngOnInit(): void {
    this._service.getPerfilUsuario().subscribe(res => {
      this.perfil = res;
    })
  }

}
