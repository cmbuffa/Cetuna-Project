using System;
using System.Collections.Generic;

namespace CetunaProject.API.Models
{
    public class Alumno
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public DateTime FecNacimiento { get; set; }
        public string CiudadNacimiento { get; set; }
        public string DptoNacimiento { get; set; }
        public string DireccionParticular { get; set; }
        public string CiudadActual { get; set; }
        public string DptoActual { get; set; }
        public string Celular { get; set; }
        public string LineaBaja { get; set; }
        public string DireccionLaboral { get; set; }
        public string LugarTrabajo { get; set; }
        public string TelLaboral { get; set; }
        public int Cedula { get; set; }
        public string Nacionalidad { get; set; }
        public DateTime FechaModificacion { get; set; }
        public ICollection<DocumentoAlumno> Documentos { get; set; }        
    }
}