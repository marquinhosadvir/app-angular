import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { IEndereco } from 'src/app/interface/endereco.interface';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {
  @Input() endereco: IEndereco = {};
  @Output() enderecoEmit = new EventEmitter<IEndereco>();

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }
  
  Salvar(form: NgForm) {
    if (this.endereco.id !== undefined) {
      this.enderecoService.updateEndereco(this.endereco).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.enderecoService.saveEndereco(this.endereco).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  cleanForm(form: NgForm) {
    this.enderecoService.getEnderecos();
    form.resetForm();
    this.endereco = {} as IEndereco;
  }

}
