import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriasService } from './../../../services/categorias.service';
import { TiposService } from './../../../services/tipos.service';
import { Tipo } from './../../../models/tipo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['../listagem-categorias/listagem-categorias.component.css']
})
export class NovaCategoriaComponent implements OnInit {
  formulario: any;
  tipos!: Tipo[];
  erros!: string[];

  constructor(private TiposService: TiposService, private categoriaService: CategoriasService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.erros = [];
    this.TiposService.PegarTodos().subscribe(resultado => {
      this.tipos = resultado;
    })
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      icone: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      tipoId: new FormControl(null, [Validators.required]),
    });
  }

  get propriedade() {
    return this.formulario.controls;
  }

  EnviarFormulario() {
    this.erros = [];
    this.categoriaService.NovaCategoria(this.formulario.value).subscribe(resultado => {
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
      })
    );
  }

  VoltarListagem() {
    this.router.navigate(['categorias/listagemcategorias'])
  }
}
