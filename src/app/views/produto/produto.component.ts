import { Observable } from 'rxjs';
import { ApiUrl } from './../../enums/api.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/components/produto/produto.model';
import { ProdutoService } from 'src/app/components/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  rows: Produto[] = [];
  // rows: Produto[];
  // produtos: Produto[]

  component: boolean = true;
  label: string = "Novo Cadastro";
  icon: string = "fa fa-plus";

  produto: Produto = {};

  constructor(private router: Router, private produtoService: ProdutoService ) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.rows = produtos
    // this.getAll()
      // console.log(produtos)
    })
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
      this.produto = {};
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
