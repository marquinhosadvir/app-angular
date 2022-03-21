import { ProdutoComponent } from './../../../views/produto/produto.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { StorageService } from 'src/app/services/storage.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @ViewChild(ProdutoComponent)
       private produtoComponent = {} as ProdutoComponent;
       startStopwatch() {
              this.produtoComponent.start();
       }
       stopStopwatch() {
              this.produtoComponent.stop();
       }
  produtos: Produto[] = [];
  @Input() produto: Produto = {};
  // @Input() produtoEmit?: string;
  // produto = { 
  //   id_produto: '', 
  //   no_produto: '', 
  //   cd_ean: '', 
  //   nm_valor: '', 
  //   nm_quantidade: ''
  //  };
  // storageId_produto = '';
  storageObject: any;
  // produto: Produto = {}

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push({
      id_produto: this.produto.id_produto,
      no_produto: this.produto.no_produto,
      cd_ean: this.produto.cd_ean,
      nm_valor: this.produto.nm_valor,
      nm_quantidade: this.produto.nm_quantidade
    })

    //Adicionando no localstorage
    localStorage.setItem("produtos", JSON.stringify(this.produtos));
  }
  setStorage() {
    this.storage.setItem('id_produto', this.produto?.id_produto);
    this.storage.setItem('produto', {
      id_produto: this.produto?.id_produto,
      no_produto: this.produto?.no_produto,
      cd_ean: this.produto?.cd_ean,
      nm_valor: this.produto?.nm_valor,
      nm_quantidade: this.produto?.nm_quantidade,
    });
    alert('Produto Cadastrado');
  }

  // getStorage() {
  //   this.storage.getItem('no_produto').subscribe((data: any) => {
  //     if (data) {
  //       this.produto = data;
  //     }
  //   });

  //   this.storage.getItem('produto').subscribe((data: any) => {
  //     if (data) {
  //       this.storageObject = JSON.parse(data);
  //     }
  //   });
  // }

}
