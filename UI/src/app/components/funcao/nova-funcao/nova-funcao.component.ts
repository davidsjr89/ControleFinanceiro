import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FuncoesService } from './../../../services/funcoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-funcao',
  templateUrl: './nova-funcao.component.html',
  styleUrls: ['../listagem-funcoes/listagem-funcoes.component.css']
})
export class NovaFuncaoComponent implements OnInit {
  formulario: any;
  erros!: string[];


  constructor(private funcoesService: FuncoesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.erros = [];
    this.formulario = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      descricao: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    });
  }

  get propriedade() {
    return this.formulario.controls;
  }

  EnviarFormulario(): void {
    const funcao = this.formulario.value;
    this.erros = [];
    this.funcoesService.NovaFuncao(funcao).subscribe(resultado => {
      this.router.navigate(['/funcoes/listagemfuncoes']);
      this.snackBar.open(resultado.mensagem, '', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    },
      err => {
        if (err.status === 400) {
          for (const campo in err.error.errors) {
            if (err.error.erros.hasOwnProperty(campo)) {
              this.erros.push(err.error.erros[campo])
            };
          }
        }
      }
    )
  }

  VoltarListagem(): void{
    this.router.navigate(['/funcoes/listagemfuncoes']);
  }
}
