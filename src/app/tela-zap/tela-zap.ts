// src/app/tela-zap/tela-zap.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// exporta com nome TelaZap para poder importar como você tentou
export interface Resultado {
  sitio: string;
  data: string;
  total?: number;
  [key: string]: string | number | undefined;
}

@Component({
  selector: 'app-tela-zap',
  standalone: true,
  imports: [CommonModule], // <-- aqui garante NgIf, NgFor, pipes do CommonModule
  templateUrl: './tela-zap.html',
  styleUrls: ['./tela-zap.scss']
})
export class TelaZap implements OnInit {

  objJsonZap: any = {
    consulta: {
      sitio: "55577123",
      periodo: { data_inicial: "01/01", data_final: "03/01" }
    },
    resultados: [
      {
        sitio: "55577123",
        data: "01/01",
        "00:00": 10,
        "01:00": 20,
        "02:00": 10,
        "03:00": 20,
        "04:00": 10,
        "05:00": 20,
        "06:00": 31,
        "07:00": 20,
        "08:00": 20,
        total: 423
      },
      {
        sitio: "55577123",
        data: "02/01",
        "00:00": 10,
        "01:00": 20,
        "02:00": 10,
        "03:00": 20,
        "04:00": 10,
        "05:00": 20,
        "06:00": 31,
        "07:00": 20,
        "08:00": 20,
        total: 423
      },
      {
        sitio: "55577123",
        data: "03/01",
        "00:00": 10,
        "01:00": 20,
        "02:00": 10,
        "03:00": 20,
        "04:00": 10,
        "05:00": 20,
        "06:00": 31,
        "07:00": 20,
        "08:00": 20,
        total: 423
      }
    ],
    total_geral: {
      "00:00": 10,
      "01:00": 20,
      "02:00": 10,
      "03:00": 20,
      "04:00": 10,
      "05:00": 20,
      "06:00": 31,
      "07:00": 20,
      "08:00": 20,
      total: 1260
    }
  };

  resultados: Resultado[] = [];
  columnKeys: string[] = [];
  fixedColumns: string[] = ['sitio', 'data'];
  showTotalColumn = true;
  columnTotals: { [key: string]: number } = {};
  totalOverall = 0;

  ngOnInit(): void {
    this.resultados = this.objJsonZap.resultados || [];
    if (this.resultados.length > 0) {
      const first: Resultado = this.resultados[0];
      this.columnKeys = Object.keys(first).filter(k => !this.fixedColumns.includes(k) && k !== 'total');
      this.columnKeys.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      this.calculateTotals();
    }
  }

  calculateTotals(): void {
    this.columnTotals = {};
    this.totalOverall = 0;
    for (const key of this.columnKeys) this.columnTotals[key] = 0;
    for (const row of this.resultados) {
      for (const key of this.columnKeys) {
        this.columnTotals[key] += Number(row[key]) || 0;
      }
      const rowTotal = Number(row.total) || this.columnKeys.reduce((s, k) => s + (Number(row[k]) || 0), 0);
      this.totalOverall += rowTotal;
    }
  }

  baixarPdf(): void {
    alert('Implementar geração de PDF');
  }

  trackByIndex(index: number): number { return index; }
}
