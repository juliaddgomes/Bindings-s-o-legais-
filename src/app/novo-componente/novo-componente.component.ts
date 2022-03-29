import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `<h1 align="center">Você tem um carrão? Se sim, quantos?</h1>

  <div align="center">
  <button type="button" (click)="cliqueBotao()"> SIM! </button>
  <br><br>
  <input type="text" value="Digite quantos..." [disabled]="isDesabilitado"> </div>
  `,
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent  {
public isDesabilitado: boolean = true;
  public cliqueBotao() {
    this.isDesabilitado = !this.isDesabilitado;
  }

}
