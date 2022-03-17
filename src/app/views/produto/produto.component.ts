import { Observable } from 'rxjs';
import { ApiUrl } from './../../enums/api.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/components/produto/produto.model';
import { ProdutoService } from 'src/app/components/produto/produto.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // rows: Produto[];
  // produtos: Produto[]
  
  component: boolean = true;
  label: string = "Novo Cadastro";
  icon: string = "fa fa-plus";
  
  produto = { 
    id_produto: '', 
    no_produto: '', 
    cd_ean: '', 
    nm_valor: '', 
    nm_quantidade: ''
  };
  // rows: Produto[] = [];
  storageid_produto: string | undefined;
  rows: Object = {};

  constructor(private router: Router, private produtoService: ProdutoService, private storage: StorageService ) { }

  ngOnInit(): void {
    this.getStorage();
    // .subscribe(produtos => {
    //   this.rows = produtos
    // this.getAll()
      // console.log(produtos)
    // })
  }

  getStorage() {
    this.storageid_produto = this.storage.getItem('id_produto');
    this.rows = this.storage.getItem('produto');
  }
  CriarProduto(): void{
    this.router.navigate(['produtos/criar'])
  }
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
  getAll(): void {
    this.rows = [];
    //this.loadingService.show();
    this.produtoService.read().subscribe(response => {
      //this.loadingService.close();
      this.rows = response;
      // this.total = this.rows.length;
      console.log(this.rows);
    });
  }

}
