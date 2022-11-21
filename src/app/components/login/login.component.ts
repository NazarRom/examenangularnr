import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Login } from 'src/app/model/login';
import { CubosServices } from 'src/app/service/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef
  constructor(private _service: CubosServices,
    private _router: Router) { }

  ngOnInit(): void {
  }
  getToken(): void {
    var user = this.cajaUser.nativeElement.value;
    var pass = this.cajaPass.nativeElement.value;
    var login = new Login(user, pass);
    this._service.getTokenLogin(login).subscribe(res => {
      localStorage.setItem('token', res.response);
      this._router.navigate(["/perfil"]);
    })
  }
}
