import { DadosRegistro } from './../../../../models/dadosRegistro';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from './../../../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  formulario: any;
  foto!: File;
  erros: string[] = [];


  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.erros = [];
    this.formulario = new FormGroup({
      nomeUsuario: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      profissao: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      foto: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]),
      senha: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    })
  }

  get propriedade(){
    return this.formulario.controls;
  }

  SelecionarFoto(fileInput: any){
    this.foto = fileInput.target.files[0] as File;
    const reader = new FileReader();
    reader.onload = function(e: any){
      document.getElementById('foto')?.removeAttribute('hidden');
      document.getElementById('foto')?.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(this.foto);
  }

  EnviarFormulario(){
    this.erros = [];
    const usuario = this.formulario.value;
    const formData: FormData = new FormData();
    if(this.foto != null){
      formData.append('file', this.foto, this.foto.name);
    }
    this.usuariosService.SalvarFoto(formData).subscribe(resultado => {
      const dadosRegistro: DadosRegistro = new DadosRegistro();
      dadosRegistro.nomeUsuario = usuario.nomeUsuario;
      dadosRegistro.cpf = usuario.cpf;
      dadosRegistro.foto = resultado.foto;
      dadosRegistro.profissao = usuario.profissao;
      dadosRegistro.email = usuario.email;
      dadosRegistro.senha = usuario.senha;
      this.usuariosService.RegistrarUsuario(dadosRegistro).subscribe(dados => {
        localStorage.setItem("emailUsuarioLogado", dados.emailUsuarioLogado);
        localStorage.setItem("usuarioId", dados.usuarioId);
        localStorage.setItem("tokenUsuarioLogado", dados.tokenUsuarioLogado);
        this.router.navigate(["cartoes/listagemcartoes"]);
      },(err => {
        if (err.status === 400) {
          for (const campo in err.error.errors) {
            if (err.error.errors.hasOwnProperty(campo)) {
              this.erros.push(err.error.errors[campo])
            }
          }
        }
      }));
    });
  }
}
