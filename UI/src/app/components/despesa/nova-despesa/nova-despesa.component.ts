import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MesService } from './../../../services/mes.service';
import { CategoriasService } from './../../../services/categorias.service';
import { CartoesService } from './../../../services/cartoes.service';
import { DespesaService } from './../../../services/despesa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mes } from './../../../models/mes';
import { Categoria } from 'src/app/models/categoria';
import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/app/models/cartao';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.css']
})
export class NovaDespesaComponent implements OnInit {
  formulario: any;
  cartoes!: Cartao[];
  categorias!: Categoria[];
  meses!: Mes[];
  usuarioId: any = localStorage.getItem('usuarioId');
  erros: string[] = [];
  constructor(private router: Router, private snackBar: MatSnackBar, private despesaService: DespesaService, private cartoesService: CartoesService,
    private categoriasService: CategoriasService, private mesesService: MesService) { }

  ngOnInit(): void {
    this.erros = [];
    this.cartoesService.PegarCartoesPeloUsuarioId(this.usuarioId).subscribe(resultado => {
      this.cartoes = resultado;
    });

    this.categoriasService.FiltrarCategoriasDespesas().subscribe(resultado => {
      this.categorias = resultado;
    });

    this.mesesService.PegarTodos().subscribe(resultado => {
      this.meses = resultado;
      console.log(this.meses)
    });

    this.formulario = new FormGroup({
      cartaoId: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      categoriaId: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required]),
      dia: new FormControl(null, [Validators.required]),
      mesId: new FormControl(null, [Validators.required]),
      ano: new FormControl(null, [Validators.required]),
      usuarioId: new FormControl(this.usuarioId, [Validators.required]),
    })
  }
  get propriedade() {
    return this.formulario.controls;
  }

  VoltarListagem() {
    this.router.navigate(['/despesas/listagemdespesas'])
  }

  EnviarFormulario() {
    this.erros = [];
    const despesa = this.formulario.value;
    this.despesaService.NovaDespesa(despesa).subscribe(resultado => {
      // this.VoltarListagem();
      this.snackBar.open(resultado.mensagem, '', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    },
      err => {
        if (err.status === 400) {
          for (const campo in err.error.errors) {
            if (err.error.errors.hasOwnProperty(campo)) {
              this.erros.push(err.error.errors[campo])
            }
          }
        }
      });
  }
}
