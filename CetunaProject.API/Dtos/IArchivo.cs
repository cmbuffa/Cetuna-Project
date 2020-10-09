using Microsoft.AspNetCore.Http;

namespace CetunaProject.API.Dtos
{
    public interface IArchivo
    {
        public IFormFile File { get; set; }
    }
}