using System;

namespace CetunaProject.API.Models
{
    public class DocumentoAlumno
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaAlta { get; set; }
        public bool EsFoto { get; set; }
        public string Url { get; set; }
        public Alumno Alumno { get; set; }
        public int AlumnoId { get; set; }

    }
}