using BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface ICartaoRepositorio: IRepositorioGenerico<Cartao>
    {
        IQueryable<Cartao> PegarCartaoPeloUsuarioId(string usuarioId);
        IQueryable<Cartao> FIltrarCartoes(string numeroCartao);
    }
}
