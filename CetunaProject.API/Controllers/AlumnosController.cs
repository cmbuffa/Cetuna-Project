using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using CetunaProject.API.Data;
using CetunaProject.API.Dtos;
using CetunaProject.API.Helpers;
using CetunaProject.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CetunaProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AlumnosController : ControllerBase
    {
        private readonly ICetunaRepository<Alumno> repo;
        private readonly IMapper mapper;
        public AlumnosController(ICetunaRepository<Alumno> repo, IMapper mapper)
        {
            this.mapper = mapper;
            this.repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAlumnos([FromQuery] UserParams userParams)
        {
            var alumnos = await this.repo.GetAll(userParams);
            var alumnosToReturn = this.mapper.Map<IEnumerable<AlumnoForListDto>>(alumnos);

            Response.AddPagination(alumnos.CurrentPage, alumnos.PageSize, alumnos.TotalCount, alumnos.TotalPages);

            return Ok(alumnosToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAlumno(int id)
        {
            var alumno = await repo.GetOne(id);

            var alumnoToReturn = this.mapper.Map<AlumnoForDetailDto>(alumno);

            return Ok(alumnoToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAlumno(AlumnoForUpdateDto alumnoDto) 
        {
            Alumno alumnoNew = new Alumno();

            alumnoNew.FechaModificacion = DateTime.Now;

            this.mapper.Map(alumnoDto, alumnoNew);

            this.repo.Add(alumnoNew);

            if(await this.repo.SaveAll())
                return NoContent();

            throw new Exception($"Creating Alumno failed on save");            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAlumno(int id, AlumnoForUpdateDto alumnoDto) 
        {
            Alumno AluFromRepo = await this.repo.GetOne(id);
            AluFromRepo.FechaModificacion = DateTime.Now;

            this.mapper.Map(alumnoDto,AluFromRepo);


            if(await this.repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating Alumno {id} failed on save");
        }
    }
}