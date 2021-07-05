import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from './../../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  formulario: any;
  erros!: string[];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.erros = [];
    this.formulario = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]),
      senha: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    })
  }

  get propriedade() {
    return this.formulario.controls;
  }

  EnviarFormulario() {
    this.erros = [];
    this.usuariosService.LogarUsuario(this.formulario.value).subscribe(resultado => {
      localStorage.setItem("emailUsuarioLogado", resultado.emailUsuarioLogado);
      localStorage.setItem("usuarioId", resultado.usuarioId);
      localStorage.setItem("tokenUsuarioLogado", resultado.tokenUsuarioLogado);
      this.router.navigateByUrl('/categorias/listagemcategorias');
    }, (err => {
      if (err.status === 400) {
        for (const campo in err.error.errors) {
          if (err.error.errors.hasOwnProperty(campo)) {
            this.erros.push(err.error.errors[campo])
          }
        }
      } else {
        this.erros.push(err.error);
      }
    })
    )
  }
}
