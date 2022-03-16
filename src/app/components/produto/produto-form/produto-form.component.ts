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

  produto: Produto = {}
  
  constructor(private ProdutoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criaProduto(): void{
    this.ProdutoService.create(this.produto).subscribe(() => {
      this.ProdutoService.showMessage('Produto cadastrado com sucesso!')
      // this.router.navigate(['produtos'])
    })
  }
  cancel(): void{
    this.router.navigate(['produtos'])
  }

}
