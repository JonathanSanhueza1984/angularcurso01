import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Spidermasn','Iron Man','Hulk'];
  heroeBorrado:string ='';

 borrarHeroe():void{
    console.log('borrando');
    this.heroeBorrado = this.heroes.shift()||''; // elimina el primero
  }

}
