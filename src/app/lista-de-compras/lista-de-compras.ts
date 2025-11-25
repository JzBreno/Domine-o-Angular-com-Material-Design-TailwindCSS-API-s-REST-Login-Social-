import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {itemLista} from './itemLista';

@Component({
  selector: 'app-lista-de-compras',
  imports: [
    FormsModule, CommonModule,
  ],
  templateUrl: './lista-de-compras.html',
  styleUrl: './lista-de-compras.scss'
})

export class ListaDeCompras {

  item: string = '';
  listaDeCompras: itemLista[] = [];
  listaDeRemovidos: itemLista[] = [];
  mostrarLista: boolean = false;

   adicionarItem() {

     if(this.item === ''){
       return;
     }

     let novoItem = new itemLista();
     novoItem.nome = this.item;
     novoItem.validado = true;

     if (novoItem) {
       this.listaDeCompras.push(novoItem);
       novoItem.id = this.listaDeCompras.indexOf(novoItem) + 1;
     }
     this.item = '';
     console.table(this.listaDeCompras);
   }

   mostrarItens(){
     console.log(this.mostrarLista)
     this.mostrarLista = !this.mostrarLista;
     console.log(this.mostrarLista)
   }

   marcarDisponibilidade(item: itemLista) {
     item.validado !=  item.validado;
     return item;
   }

   removerItem(index: number) {

     this.listaDeRemovidos.push(this.listaDeCompras[index]);
      this.listaDeCompras.splice(index, 1);
      console.table(this.listaDeRemovidos);

   }

}
