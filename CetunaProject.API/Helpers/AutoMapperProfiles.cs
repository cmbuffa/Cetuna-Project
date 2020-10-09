using System;
using System.Linq;
using AutoMapper;
using CetunaProject.API.Dtos;
using CetunaProject.API.Models;

namespace CetunaProject.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Alumno, AlumnoForListDto>()
            .ForMember(dest => dest.NombreApellido, opt => opt.MapFrom(src => $"{src.Nombres} {src.Apellidos}"))
            .ForMember(dest => dest.Edad, src => src.MapFrom(f => f.FecNacimiento.CalculateAge()));
            CreateMap<Alumno, AlumnoForDetailDto>()
            .ForMember(dest => dest.FotoUrl, opt => opt.MapFrom(src => src.Documentos.FirstOrDefault(d => d.EsFoto).Url));
            CreateMap<DocumentoAlumno, DocumentoForDetailDto>();
            CreateMap<AlumnoForUpdateDto, Alumno>();
        }
    }
}