import { Component, OnInit } from '@angular/core';
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
  produto = { 
    id_produto: '', 
    no_produto: '', 
    cd_ean: '', 
    nm_valor: '', 
    nm_quantidade: ''
   };
  storageId_produto = '';
  storageObject: any;
  // produto: Produto = {}
  
  constructor(private ProdutoService: ProdutoService,
    private router: Router, private storage: LocalStorageService) { }

  ngOnInit(): void {
    // this.storage.observeItem('id_produto')
    //   .subscribe((value) => {
    //     if (value) 
    //       alert('Set new value to local storage key id_produto : ' + value);
    //   });
  }

  // criaProduto(): void{
  //   this.ProdutoService.create(this.produto).subscribe(() => {
  //     this.ProdutoService.showMessage('Produto cadastrado com sucesso!')
  //     // this.produto.reset();
  //     // this.router.navigate(['produtos'])
  //   })
  // }
  // cancel(): void{
  //   this.router.navigate(['produtos'])
  // }
  // produto = { 
  //   id_produto: '', 
  //   no_produto: '', 
  //   cd_ean: '', 
  //   nm_valor: '', 
  //   nm_quantidade: ''
  // };
  // storageid_produto: string | undefined;
  // storageObject: Object = {};

  // setStorage() {
  //   this.storage.setItem('id_produto', this.produto.id_produto);
  //   this.storage.setItem('produto', {
      
  //   });
  //   alert('Set storage variable and object successfull');
  // }

  // getStorage() {
  //   this.storageid_produto = this.storage.getItem('id_produto');
  //   this.storageObject = this.storage.getItem('produto');
  // }
  // setStorage() {
  //   // To save string
  //   this.storage.setItem('id_produto', this.produto.id_produto).subscribe(() => {});

  //   // To save object, need to convert to string
  //   this.storage.setItem('produto', JSON.stringify({ id_produto: this.produto.id_produto,
  //     no_produto: this.produto.no_produto,
  //     cd_ean: this.produto.cd_ean,
  //     nm_valor: this.produto.nm_valor,
  //     nm_quantidade: this.produto.nm_quantidade }))
  //   .subscribe(() => {});
  // }
  setStorage() {
    this.storage.setItem('id_produto', this.produto.id_produto);
    this.storage.setItem('produto', {
      id_produto: this.produto.id_produto,
      no_produto: this.produto.no_produto,
      cd_ean: this.produto.cd_ean,
      nm_valor: this.produto.nm_valor,
      nm_quantidade: this.produto.nm_quantidade,
    });
    alert('Set storage variable and object successfull');
  }

  getStorage() {
    this.storage.getItem('id_produto').subscribe((data: any) => {
      if (data) {
        this.storageId_produto = data;
      }
    });
   
    this.storage.getItem('produto').subscribe((data: any) => {
      if (data) {
        this.storageObject = JSON.parse(data);
      }
    });
  }

  // removeItemStorage(key: string) {
  //   this.storage.removeItem(key).subscribe(() => {
  //     this.storageId_produto = '';
  //   });
  // }

  // clearAllStorage() {
  //   this.storage.clear().subscribe(() => {
  //     this.storageId_produto = '';
  //     this.storageObject = {};
  //   });
  // }


}
