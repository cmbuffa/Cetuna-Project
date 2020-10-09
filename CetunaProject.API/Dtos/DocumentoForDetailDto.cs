using System;

namespace CetunaProject.API.Dtos
{
    public class DocumentoForDetailDto
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public bool EsFoto { get; set; }
        public string Url { get; set; }
        
    }
}