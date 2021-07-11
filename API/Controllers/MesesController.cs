using BLL.Models;
using DAL.Interfaces;
using DAL.Repositorios;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize()]

    public class MesesController : ControllerBase
    {
        private readonly IMesRepositorio _mesRepositorio;

        public MesesController(IMesRepositorio mesRepositorio)
        {
            _mesRepositorio = mesRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mes>>> GetMeses()
        {
            return await _mesRepositorio.PegarTodos().ToListAsync();
        }
    }
}