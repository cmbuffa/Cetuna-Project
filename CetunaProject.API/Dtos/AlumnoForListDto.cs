using System;

namespace CetunaProject.API.Dtos
{
    public class AlumnoForListDto
    {
        public int Id { get; set; }
        public int Cedula { get; set; }
        public string NombreApellido { get; set; }
        public int Edad { get; set; }        
        public string CiudadActual { get; set; }
        public string DptoActual { get; set; }
        public string Celular { get; set; }
        public string LugarTrabajo { get; set; }
        public string Nacionalidad { get; set; }
        public DateTime FechaModificacion { get; set; }
    }
}