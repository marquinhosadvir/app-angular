import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto = {
    no_produto: '',
    cd_ean: '',
    nm_valor: 0,
    nm_quantidade: 0,
  }
  constructor(private ProdutoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criaProduto(): void{
    this.ProdutoService.create(this.produto).subscribe(() => {
      this.ProdutoService.showMessage('Operação executada com sucesso!')
    })
  }
  cancel(): void{
    this.router.navigate(['produtos'])
  }

}
