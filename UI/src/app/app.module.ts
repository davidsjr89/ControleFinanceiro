import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { TiposService } from './services/tipos.service';
import { CategoriasService } from './services/categorias.service';
import { FuncoesService } from './services/funcoes.service';

import { DialogExclusaoCategoriasComponent, ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { ListagemFuncoesComponent } from './components/funcao/listagem-funcoes/listagem-funcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemCategoriasComponent,
    NovaCategoriaComponent,
    AtualizarCategoriaComponent,
    DialogExclusaoCategoriasComponent,
    ListagemFuncoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [
    TiposService, 
    CategoriasService,
    FuncoesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
