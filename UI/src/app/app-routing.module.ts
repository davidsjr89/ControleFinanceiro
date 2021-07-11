import { NovaDespesaComponent } from './components/despesa/nova-despesa/nova-despesa.component';
import { AtualizarCartoesComponent } from './components/cartao/atualizar-cartoes/atualizar-cartoes.component';
import { ListagemCartoesComponent } from './components/cartao/listagem-cartoes/listagem-cartoes.component';
import { NovoCartaoComponent } from './components/cartao/novo-cartao/novo-cartao.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginUsuarioComponent } from './components/usuario/login/login-usuario/login-usuario.component';
import { RegistrarUsuarioComponent } from './components/usuario/registro/registrar-usuario/registrar-usuario.component';
import { AtualizarFuncaoComponent } from './components/funcao/atualizar-funcao/atualizar-funcao.component';
import { NovaFuncaoComponent } from './components/funcao/nova-funcao/nova-funcao.component';
import { ListagemFuncoesComponent } from './components/funcao/listagem-funcoes/listagem-funcoes.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuardService], children: [
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
      },
      {
        path: 'funcoes/novafuncao', component: NovaFuncaoComponent
      },
      {
        path: 'funcoes/atualizarfuncao/:id', component: AtualizarFuncaoComponent
      },
      {
        path: 'cartoes/novocartao', component: NovoCartaoComponent
      },
      {
        path: 'cartoes/listagemcartoes', component: ListagemCartoesComponent
      },
      {
        path: 'cartoes/atualizarcartao/:id', component: AtualizarCartoesComponent
      },
      {
        path: 'despesas/novadespesa', component: NovaDespesaComponent
      },
      {
        path: 'despesas/listagemdespesas', component: NovaDespesaComponent
      },
      
    ]
  },
  
  {
    path: 'usuarios/registrarusuario', component: RegistrarUsuarioComponent
  },
  {
    path: 'usuarios/loginusuario', component: LoginUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
