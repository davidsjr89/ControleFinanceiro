import { FuncoesService } from './../../../services/funcoes.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listagem-funcoes',
  templateUrl: './listagem-funcoes.component.html',
  styleUrls: ['./listagem-funcoes.component.css']
})
export class ListagemFuncoesComponent implements OnInit {
  funcoes = new MatTableDataSource<any>();
  displayedColumns!: string[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private funcoesService: FuncoesService) { }

  ngOnInit(): void {
    this.funcoesService.PegarTodos().subscribe(resultado => {
      this.funcoes.data = resultado;
      this.funcoes.sort = this.sort;
      this.funcoes.paginator = this.paginator;
    });
    this.displayedColumns = this.ExibirColunas();
  }

  ExibirColunas(): string[] {
    return ['nome', 'descricao', 'acoes']
  }
}
