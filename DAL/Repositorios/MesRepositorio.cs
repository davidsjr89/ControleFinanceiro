using BLL.Models;
using DAL.Interfaces;

namespace DAL.Repositorios
{
    public class MesRepositorio : RepositorioGenerico<Mes>, IMesRepositorio
    {
        public MesRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
