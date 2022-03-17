import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  // produto: Produto = {}
  
  constructor(private ProdutoService: ProdutoService,
    private router: Router, private storage: StorageService) { }

  ngOnInit(): void {
    
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
  produto = { 
    id_produto: '', 
    no_produto: '', 
    cd_ean: '', 
    nm_valor: '', 
    nm_quantidade: ''
  };
  storageid_produto: string | undefined;
  storageObject: Object = {};

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
    this.storageid_produto = this.storage.getItem('id_produto');
    this.storageObject = this.storage.getItem('person');
  }


}
