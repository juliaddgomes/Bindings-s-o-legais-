import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
  <h2 [class]="parOuImpar">{{getContador()}}</h2>
  <button type="button" (click)="cliqueBotao()"> CLIQUE EM MIM </button>
  

  `,
  styles: [
    `
    .sucesso {
      color:green;
    }
    .sp {
      color:red;
    }
    
    `
  ]
})
export class TerceiroComponent  {

 
public parOuImpar: string ='par';
  private contador: number = 0;

  public cliqueBotao() {

    console.log("botao clicado"+(this.contador++));
     if (this.contador % 2 ==0) {
       console.log("par");
       this.parOuImpar = 'par';

     }
     else {
       console.log("impar")
       this.parOuImpar ='impar';
     }
  }
  public getContador() {
    return this.contador;
  }
 

}
