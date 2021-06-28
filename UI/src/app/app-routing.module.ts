import { ListagemFuncoesComponent } from './components/funcao/listagem-funcoes/listagem-funcoes.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categorias/listagemcategorias', component: ListagemCategoriasComponent
  },
  {
    path: 'categorias/novacategoria', component: NovaCategoriaComponent
  },
  {
    path: 'categorias/atualizarcategoria/:id', component: AtualizarCategoriaComponent
  },
  {
    path: 'funcoes/listagemfuncoes', component: ListagemFuncoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
