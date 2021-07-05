﻿using BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IFuncaoRepositorio: IRepositorioGenerico<Funcao>
    {
        Task AdicionarFuncao(Funcao funcao);
        Task AtualizarFuncao(Funcao funcao);
        IQueryable<Funcao> FiltrarFuncoes(string nomeFuncao);
    }
}
