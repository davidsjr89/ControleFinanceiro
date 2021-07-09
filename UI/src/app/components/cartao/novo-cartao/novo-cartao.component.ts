import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartoesService } from './../../../services/cartoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['../listagem-cartoes/listagem-cartoes.component.css']
})
export class NovoCartaoComponent implements OnInit {
  formulario: any;
  erros!: string[];
  usuarioId = localStorage.getItem('usuarioId');


  constructor(private cartoesService: CartoesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.erros = [];

    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      bandeira: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
      numero: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      usuarioId: new FormControl(this.usuarioId),
      limite: new FormControl(null, [Validators.required]),
    })
  }

  get propriedade() {
    return this.formulario.controls;
  }

  VoltarListagem() {
    this.router.navigate(['cartoes/listagemcartoes'])
  }

  EnviarFormulario() {
    this.erros = [];
    const cartao = this.formulario.value;
    this.cartoesService.NovoCartao(cartao).subscribe(resultado => {
       this.VoltarListagem();
      this.snackBar.open(resultado.mensagem, '', {
        duration: 2000,
        horizontalPosition: "right",
        verticalPosition: "top"
      });
    }, (err => {
      if (err.status === 400) {
        for (const campo in err.error.errors) {
          if (err.error.errors.hasOwnProperty(campo)) {
            this.erros.push(err.error.errors[campo])
          }
        }
      }
    }));
  }
}
