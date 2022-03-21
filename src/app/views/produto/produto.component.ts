import { Observable } from 'rxjs';
import { ApiUrl } from './../../enums/api.enum';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/components/produto/produto.model';
import { ProdutoService } from 'src/app/components/produto/produto.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Output() produtoEmit?= "Pai do componente";

  // rows: Produto[];
  // produtos: Produto[]

  component: boolean = true;
  label: string = "Novo Cadastro";
  icon: string = "fa fa-plus";
  rows: Produto[] = [];
  // produto = { 
  //   id_produto: '', 
  //   no_produto: '', 
  //   cd_ean: '', 
  //   nm_valor: '', 
  //   nm_quantidade: ''
  // };
  produto: Produto = {};
  // rows: Produto[] = [];
  // storageid_produto: string | undefined;
  // storageObject: any;
  // person = { name: '', country: '' };
  // storageId_produto?: number;
  // storageNo_produto?: string;
  // storageCd_ean?: string;
  // storageNm_valor?: number;
  // storageNm_quantidade?: number;
  storageObject: any;

  constructor(
    private storage: StorageService, 
    private localStorage: LocalStorageService, 
    // private lStorage: LocalStorageService
    private ProdutoService: ProdutoService
  ) { }


  ngOnInit(): void {
    // this.rows = JSON.parse(this.localStorage.getItem('produtos'))
    this.rows = this.localStorage.getItem('produtos')
      // this.localStorage.getItem('produtos')
    // console.log(

    // )
    // this.getStorage;
      // .subscribe((value) => {
      //   if (value)
      //     alert('Set new value to local storage key no_produto : ' + value);
      // });
  }

  pesquisar(marca: string, ano: string, modelo: string) {
    // this.rows = JSON.parse(localStorage.getItem("produtos"));
    // this.enderecos = this.storedNames ? this.filtrar(marca, ano, modelo) : this.enderecos;
  }

  getStorage(id_produto: number, no_produto: string, cd_ean: string, nm_valor: number, nm_quantidade: number) {
    // this.rows = JSON.parse(localStorage.getItem("produtos"));
    // this.produto.id_produto = this.storage.retrieveValue('id_produto');
    // this.produto.no_produto = this.storage.retrieveValue('no_produto');
    // this.produto.cd_ean = this.storage.retrieveValue('cd_ean');
    // this.produto.nm_valor = this.storage.retrieveValue('nm_valor');
    // this.produto.nm_quantidade = this.storage.retrieveValue('nm_quantidade');
    // this.rows = JSON.parse(this.storage.retrieveValue('produtos'));
    this.rows = JSON.parse(this.localStorage.getItem('produtos'))
    console.log(this.localStorage.getItem('produtos'))
  }

  edit(produto: Produto) {
    this.produto = produto;
    this.component = !this.component;
    this.change();
  }

  removeItemStorage(key: string) {
    this.storage.removeValue(key);
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
  // getAll(): void {
  //   this.rows = [];
  //   //this.loadingService.show();
  //   this.produtoService.read().subscribe(response => {
  //     //this.loadingService.close();
  //     this.rows = response;
  //     // this.total = this.rows.length;
  //     console.log(this.rows);
  //   });
  // }
  shouldRun:boolean = false;
	counter:number = 0;
	start() {
	      this.shouldRun = true;
	      let interval = setInterval(() =>
  	        {  
		    if(this.shouldRun === false){
			   clearInterval(interval);
		    }
		    this.counter = this.counter + 1;			
	        }, 1000);
	}
	stop() {
	      this.shouldRun = false;
	}

}
