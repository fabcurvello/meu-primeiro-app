import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  // SIGNALS

  // writable signal -> signal (reativo) que permite alterações (com set ou update)
  produtos = signal([
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Fone', preco: 80 },
  ]);

  produtoSelecionado = signal<string | null>(null);

  carrinho = signal<{ nome: string; preco: number }[]>([]);

  // COMPUTED SIGNALS

  // computed signal -> observa outro signal e se atualiza automaticamente
  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => {
    return this.carrinho().reduce((total, item) => total + item.preco, 0);
  });

  // EFFECTS
  // método construtor - formata os objetos criados a partir desta classe
  constructor() {
    // estes 2 effects geram mensagens no terminal sempre que alterações são realizadas.
    // effect observa alterações realizadas no signal (que é o vetor de produtos)
    effect(() => {
      console.log('Lista de produtos alterada:', this.produtos());
    });

    // effect observa alterações do computed signal (valorTotal).
    effect(() => {
      console.log('Valor total atualizado:', this.valorTotal());
    });

    // effect observa o title da página e altera se a condição for atendida
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
  } // fim do constructor

  // AÇÕES QUE ALTERAM VALORES DE SIGNALS (SET E UPDATE)

  exibirProduto(nome: string) {
    this.produtoSelecionado.set(nome);
  }

  // update -> adiciona um item ao writable signal
  adicionarProduto() {
    this.produtos.update((listaAtual) => [...listaAtual, { nome: 'Teclado', preco: 250 }]);
  }

  // set -> altera um item do writable signal
  substituirProdutos() {
    this.produtos.set([{ nome: 'Produto novo', preco: 999 }]);
  }

  adicionarAoCarrinho(produto: { nome: string; preco: number }) {
    this.carrinho.update((listaAtual) => [...listaAtual, produto]);
  }
}
