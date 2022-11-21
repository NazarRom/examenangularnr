import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaemail") cajaemail!: ElementRef;
  @ViewChild("cajapass") cajapass!: ElementRef;
  constructor(private _service: PerfilService) { }

  ngOnInit(): void {
  }
  registarUsuario(): void {
    var nombre = this.cajanombre.nativeElement.value;
    var email = this.cajaemail.nativeElement.value;
    var pass = this.cajapass.nativeElement.value;
    var miperfil = new Perfil(0, nombre, email, pass);
    console.log(miperfil);
    this._service.registerUsuario(miperfil).subscribe(res=>{
      console.log(res + "registrado");
    })
  }

}
