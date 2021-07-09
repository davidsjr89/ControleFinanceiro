using BLL.Models;
using DAL.Interfaces;
using System;
using System.Linq;

namespace DAL.Repositorios
{
    public class CartaoRepositorio : RepositorioGenerico<Cartao>, ICartaoRepositorio
    {
        private readonly Contexto _contexto;

        public CartaoRepositorio(Contexto contexto): base(contexto)
        {
            _contexto = contexto;
        }

        public IQueryable<Cartao> FIltrarCartoes(string numeroCartao)
        {
            try
            {
                return _contexto.Cartoes.Where(c => c.Numero.Contains(numeroCartao));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public IQueryable<Cartao> PegarCartaoPeloUsuarioId(string usuarioId)
        {
            try
            {
                return _contexto.Cartoes.Where(c => c.UsuarioId == usuarioId);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
