import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { StorageService } from './services/storage.service';
import { TodoListService } from './services/todo-list.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EnderecoComponent } from './views/endereco/endereco.component';
import { EnderecoFormComponent } from './views/endereco/endereco-form/endereco-form.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    EnderecoComponent,
    EnderecoFormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    NgxWebstorageModule.forRoot(),
    CurrencyMaskModule,
    SweetAlert2Module,
  ],
  providers: [
    TodoListService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
