using BLL.Models;
using DAL;
using DAL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoController : ControllerBase
    {
        private readonly ITipoRepositorio _tipoRepositorio;

        public TipoController(ITipoRepositorio tipoRepositorio)
        {
            _tipoRepositorio = tipoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tipo>>> GetTipos()
        {
            return await _tipoRepositorio.PegarTodos().ToListAsync();
        }
    }
}
