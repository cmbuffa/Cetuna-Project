using System;
using Microsoft.AspNetCore.Http;

namespace CetunaProject.API.Dtos
{
    public class DocumentoForCreationDto :IArchivo
    {
        public string Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public bool EsFoto { get; set; }
        public string Url { get; set; }
        public IFormFile File { get; set; }

        public DocumentoForCreationDto()
        {
            FechaAlta = DateTime.Now;
        }
    }
}