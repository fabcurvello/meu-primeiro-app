import { Component, signal, computed, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Produto } from '../produto/produto';
import { ProdutosService } from '../../../core/services/produtos.service';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, MatButtonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  private produtosService = inject(ProdutosService);
  carrinhoService = inject(CarrinhoService);

  quantidadeCarrinho = this.carrinhoService.quantidade;
  totalCarrinho = this.carrinhoService.total;

  // SIGNALS

  // writable signal -> signal (reativo) que permite alterações (com set ou update)
  produtos = signal<{ nome: string; preco: number }[]>([]);

  carregando = signal(true);

  produtoSelecionado = signal<string | null>(null);

  erro = signal<string | null>(null);

  // COMPUTED SIGNALS

  // computed signal -> observa outro signal e se atualiza automaticamente
  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce((total, item) => total + item.preco, 0);
  });

  // EFFECTS
  // método construtor - formata os objetos criados a partir desta classe
  constructor() {
    // carrega da API
    this.carregarProdutos();

    // effects continuam iguais
    effect(() => {
      console.log('Lista de produtos alterada:', this.produtos());
    });

    effect(() => {
      console.log('Valor total atualizado:', this.valorTotal());
    });
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
  } // fim do construtor

  carregarProdutos() {
    this.erro.set(null); // limpa erro anterior
    this.carregando.set(true);

    this.produtosService.buscarProdutos().subscribe({
      next: (dados) => {
        const produtos = this.produtosService.transformarProdutos(dados);
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        this.erro.set('Erro ao carregar produtos. Verifique sua conexão e tente novamente.');
        this.carregando.set(false);
      },
    });
  }

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
    this.carrinhoService.adicionar(produto);
  }
}
