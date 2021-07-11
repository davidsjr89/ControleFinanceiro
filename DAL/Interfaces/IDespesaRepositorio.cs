using BLL.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IDespesaRepositorio: IRepositorioGenerico<Despesa>
    {
        IQueryable<Despesa> PegarDespesarPeloUsuarioId(string usuarioId);
        void ExcluirDespesas(IEnumerable<Despesa> despesas);

        Task<IEnumerable<Despesa>> PegarDespesarPeloCartaoId(int cartaoId);
    }
}
