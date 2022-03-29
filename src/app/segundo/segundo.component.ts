import { Component } from "@angular/core";

@Component ({
    selector: 'app-segundo',
    template: `<div> {{ user.nome }} 
  {{ preco }} 
  {{ getPreco() }} 
  </div>` ,




})

export class SegundoComponent{


    public user: { id :number; nome: string} = {
        id: 3012,
        nome: "Ivan",
    }
    
public preco: number = 10;

getPreco(): string {
    return `R$ ${this.preco}`;
}

};
 



