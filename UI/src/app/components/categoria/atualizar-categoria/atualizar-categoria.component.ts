import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriasService } from './../../../services/categorias.service';
import { TiposService } from './../../../services/tipos.service';
import { Tipo } from './../../../models/tipo';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['../listagem-categorias/listagem-categorias.component.css']
})
export class AtualizarCategoriaComponent implements OnInit {
  categoria!: Observable<Categoria>;
  categoriaId!: number;
  nomeCategoria!: string;
  tipos!: Tipo[];
  formulario: any;
  erros!: string[];

  constructor(private router: Router, private route: ActivatedRoute, private tiposService: TiposService, private categoriasService: CategoriasService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.erros = [];
    this.categoriaId = this.route.snapshot.params.id;
    this.tiposService.PegarTodos().subscribe(resultado => {
      this.tipos = resultado;
    });
    this.categoriasService.PegarCategoriaPeloId(this.categoriaId).subscribe(resultado => {
      this.nomeCategoria = resultado.nome;
      this.formulario = new FormGroup({
        categoriaId: new FormControl(resultado.categoriaId),
        nome: new FormControl(resultado.nome, [Validators.required, Validators.maxLength(50)]),
        icone: new FormControl(resultado.icone, [Validators.required, Validators.maxLength(15)]),
        tipoId: new FormControl(resultado.tipoId, [Validators.required])
      });
    });
  }

  get propriedade(){
    return this.formulario.controls;
  }

  EnviarFormulario(){
    this.erros = [];
    const categoria = this.formulario.value;
    this.categoriasService.AtualizarCategoria(this.categoriaId, categoria).subscribe(resultado => {
    this.router.navigate(['categorias/listagemcategorias'])
    this.snackBar.open(resultado.mensagem, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
    },
    (err => {
      if (err.status === 400) {
        for (const campo in err.error.errors) {
          if (err.error.errors.hasOwnProperty(campo)) {
            this.erros.push(err.error.errors[campo])
          }
        }
      }
    }));
  }

  VoltarListagem(){
    this.router.navigate(['categorias/listagemcategorias'])
  }

}
