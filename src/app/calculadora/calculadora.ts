import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [
    FormsModule
  ],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  valor1 = 0;
   valor2 = 0;
   resultado = 0;
   varExemplo ?: number ;

   somar() {
     this.resultado = this.valor1 + this.valor2;
   }

   subtrair() {
     this.resultado = this.valor1 - this.valor2;
   }

   multiplicar() {
     this.resultado = this.valor1 * this.valor2;
   }

   dividir() {
     this.resultado = this.valor1 / this.valor2;
   }


}
