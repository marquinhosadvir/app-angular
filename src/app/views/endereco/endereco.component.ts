import { Component, OnInit } from '@angular/core';
import { IEndereco } from 'src/app/interface/endereco.interface';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  component: boolean = true;
  label: string = "Novo Cadastro";
  icon: string = "fa fa-plus";
  rows: IEndereco[] = [];
  endereco: IEndereco = {};
  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.enderecoService.getEnderecos().subscribe((rows: IEndereco[]) => {
      this.rows = rows;
    });
  }
  addItem(newItem: IEndereco) {
    this.rows.push(newItem);
  }
  edit(endereco: IEndereco) {
    this.endereco = endereco;
    this.component = !this.component;
    this.change();
  }

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

}
