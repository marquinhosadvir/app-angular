import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { EnderecoComponent } from './views/endereco/endereco.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoComponent
  },
  {
    path: "produtos/criar",
    component: ProdutoFormComponent
  },
  {
    path: "enderecos",
    component: EnderecoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
