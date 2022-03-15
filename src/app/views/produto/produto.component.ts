import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  CriarProduto(): void{
    this.router.navigate(['produtos/criar'])
  }

}
