import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';
import { IProduto } from '../produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @Input() produto: IProduto = {};
  @Output() produtoEmit = new EventEmitter<IProduto>();
  @Output() extrato = new EventEmitter<number>();
  storageObject: any;
teste: number = 0;
text: string = "";
t: number = 0;
s: any = 2.0;
y: IProduto[] = [];
material: string = "";
mat = 5;
mtc: boolean = true;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.extrato.emit(28);
    // this.y = [
    // ];
    // this.y.push({id_produto: 5, no_produto: "Martelo", cd_ean: "4567892314", nm_valor: 50.00, nm_quantidade: 20})
    // console.log(this.y);
    // this.material = "Manue";
  }

  salvar(){
    if (!this.produto.id_produto) {
      this.produto.id_produto = Number(Math.random());
    }
    this.storage.setItem(this.produto);
    this.produtoEmit.emit(this.produto);
    this.produto = {};
    alert('Produto Cadastrado');
  }

}
