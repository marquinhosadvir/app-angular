import { Observable } from 'rxjs';
import { ApiUrl } from './../../enums/api.enum';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from 'src/app/components/produto/produto.model';
import { ProdutoService } from 'src/app/components/produto/produto.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  component: boolean = true;
  label: string = "Novo Cadastro";
  icon: string = "fa fa-plus";
  rows: IProduto[] = [];
  produto: IProduto = {};

  constructor(
    private storage: LocalStorageService
  ) { }


  ngOnInit(): void {
    for (let index = 0; index < localStorage.length; index++) {
      this.rows.push(this.storage.getItem(index.toString()));
    }
    // this.rows = this.produtoEmit.emit(
    //   this.storage.getItem(this.produto.toString())
    // );
    console.log(this.rows)
  }
  addItem(newItem: IProduto) {
    this.rows.push(newItem);
  }

  getExtrato(item: number){
    console.log(item)
  }

  edit(produto: IProduto) {
    this.produto = produto;
    this.component = !this.component;
    this.change();
  }

  removeItemStorage(key: string) {
    this.storage.removeItem(key);
  }

  // CriarProduto(): void{
  //   this.router.navigate(['produtos/criar'])
  // }
  changeComponent() {
    this.component = !this.component;
    this.change();
  }
  change() {
    if (this.component) {
      this.icon = "fa fa-plus";
      this.label = "Novo Cadastro";
      // this.produto = {};
    } else {
      this.label = "Pesquisa";
      this.icon = "ft-search";
    }
  }  
  

}
