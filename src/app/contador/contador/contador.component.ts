import { Component } from "@angular/core";

@Component({

    selector: 'app-contador',
    template:`<h1>Hola Mundo</h1>
    <h1>{{title}}</h1>
    <h3>{{base}}</h3>
    <button (click)="numero = numero + 1">+ 1 </button>
    <button (click)="sumar()">+ 1 </button>
    <button (click)="acumular(+1)"> +1</button>
    <button (click)="acumular(+base)"> +{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="numero = numero - 1">- 1 </button>
    <button (click)="restar()">- 1 </button>
    <button (click)="acumular(-1)">-1 </button>
    <button (click)="acumular(-base)"> -{{base}}</button>`
})
export class ContadorComponent{

    title = 'Contador App';
    numero: number =10;
    // tarea 
    base:number = 5;
    sumar(){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }
  

}