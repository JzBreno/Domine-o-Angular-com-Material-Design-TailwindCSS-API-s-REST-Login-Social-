import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponente} from './primeiro-componente/primeiro-componente';
import {Calculadora} from './calculadora/calculadora';
import {ListaDeCompras} from './lista-de-compras/lista-de-compras';
import {TelaZap} from './tela-zap/tela-zap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaDeCompras],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
