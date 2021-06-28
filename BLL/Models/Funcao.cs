using Microsoft.AspNetCore.Identity;

namespace BLL.Models
{
    public class Funcao : IdentityRole<string>
    {
        public string Descricao { get; set; }
    }
}
