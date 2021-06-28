using BLL.Models;
using DAL.Interfaces;

namespace DAL.Repositorios
{
    public class TipoRepositorio : RepositorioGenerico<Tipo>, ITipoRepositorio
    {
        public TipoRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
