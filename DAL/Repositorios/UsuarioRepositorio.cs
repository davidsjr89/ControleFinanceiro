using BLL.Models;
using DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositorios
{
    public class UsuarioRepositorio : RepositorioGenerico<Usuario>, IUsuarioRepositorio
    {
        private readonly UserManager<Usuario> _gerenciadorUsuario;
        private readonly SignInManager<Usuario> _gerenciadoLogin;
        private readonly Contexto _contexto;

        public UsuarioRepositorio(UserManager<Usuario> gerenciadorUsuario, SignInManager<Usuario> gerenciadoLogin, Contexto contexto) : base(contexto)
        {
            _gerenciadorUsuario = gerenciadorUsuario;
            _gerenciadoLogin = gerenciadoLogin;
            _contexto = contexto;
        }

        public async Task<IdentityResult> CriarUsuario(Usuario usuario, string senha)
        {
            try
            {
                return await _gerenciadorUsuario.CreateAsync(usuario, senha);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task IncluirUsuarioEmFuncao(Usuario usuario, string funcao)
        {
            try
            {
                await _gerenciadorUsuario.AddToRoleAsync(usuario, funcao);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task LogarUsuario(Usuario usuario, bool lembrar)
        {
            try
            {
                await _gerenciadoLogin.SignInAsync(usuario, false);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<int> PegarQuantidadeUsuariosRegistrados()
        {
            try
            {
                return await _contexto.Usuarios.CountAsync();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<Usuario> PegarUsuarioPeloEmail(string email)
        {
            try
            {
                return await _gerenciadorUsuario.FindByEmailAsync(email);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
