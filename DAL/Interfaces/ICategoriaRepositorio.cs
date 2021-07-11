using BLL.Models;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface ICategoriaRepositorio: IRepositorioGenerico<Categoria>
    {
        new IQueryable<Categoria> PegarTodos();
        new Task<Categoria> PegarPeloId(int id);
        IQueryable<Categoria> FiltrarCategorias(string nomeCategoria);
        IQueryable<Categoria> PegarCategoriasPeloTipo(string tipo);
    }
}
