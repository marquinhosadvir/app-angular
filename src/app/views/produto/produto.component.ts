import { Observable } from 'rxjs';
import { ApiUrl } from './../../enums/api.enum';
import { Component, OnInit } from '@angular/core';
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
  // storageid_produto: string | undefined;
  // storageObject: any;
  // person = { name: '', country: '' };
  storageId_produto: number | undefined;
  storageNo_produto: string | undefined;
  storageCd_ean: string | undefined;
  storageNm_valor: number | undefined;
  storageNm_quantidade: number | undefined;
  storageObject: any;

  constructor(
    private storage: StorageService
  ) { }


  ngOnInit(): void {
    this.storage.observeStorageIten('no_produto')
      .subscribe((value) => {
        if (value) 
          alert('Set new value to local storage key no_produto : ' + value);
      });
  }

  setStorage() {
    // To save string
    this.storage.saveValue('id_produto', this.produto.id_produto);

    // To save object, need to convert to string
    this.storage.saveValue('produto', JSON.stringify({ id_produto: this.produto.id_produto, 
      no_produto: this.produto.no_produto,
      cd_ean: this.produto.cd_ean,
      nm_valor: this.produto.nm_valor,
      nm_quantidade: this.produto.nm_quantidade,
    }));
    alert('Set storage variable and object successfull');
  }

  getStorage() {
    this.storageId_produto = this.storage.retrieveValue('id_produto');
    this.storageNo_produto = this.storage.retrieveValue('no_produto');
    this.storageCd_ean = this.storage.retrieveValue('cd_ean');
    this.storageNm_valor = this.storage.retrieveValue('nm_valor');
    this.storageNm_quantidade = this.storage.retrieveValue('nm_quantidade');
    this.storageObject = JSON.parse(this.storage.retrieveValue('produto'));
  }

  removeItemStorage(key: string) {
    this.storage.removeValue(key);
  }

  clearAllStorage() {
    this.storage.clear();
    this.storageNo_produto = '';
    this.storageObject = {};
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

}
