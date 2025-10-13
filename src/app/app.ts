import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponente} from './primeiro-componente/primeiro-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponente],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
