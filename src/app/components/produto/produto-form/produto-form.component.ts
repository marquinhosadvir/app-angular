import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  constructor(private ProdutoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criaProduto(): void{
    this.ProdutoService.showMessage('Operação executada com sucesso!')
  }
  cancel(): void{
    this.router.navigate(['produtos'])
  }

}
