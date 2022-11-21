import { Component, OnInit } from '@angular/core';
import { CubosServices } from 'src/app/service/cubos.service';
import { Cubo } from 'src/app/model/cubo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public cubos!: Array<Cubo>;
  constructor(private _services : CubosServices) { }

  ngOnInit(): void {
    this._services.getAllCubos().subscribe(res=>{
      this.cubos = res;
    })
    
  }
  
}
