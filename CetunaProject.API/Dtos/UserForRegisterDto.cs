using System.ComponentModel.DataAnnotations;

namespace CetunaProject.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Campo requerido")]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 8, ErrorMessage = "El password debe ser de 8 caracteres")]
        public string Password { get; set; }
    }
}