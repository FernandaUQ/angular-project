import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // properties binding (permite ao html acesso a eles)
  public text: string | undefined
  count: number  = 0;
  constructor() { }

  ngOnInit(): void {
    this.text = "Olá Mundo!!!!!!"
  }

  //event binding -> recebe dados do template
  clicou(){
    this.text = "Click"
    this.count++
  }

}
