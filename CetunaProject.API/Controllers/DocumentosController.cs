using System;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using CetunaProject.API.Data;
using CetunaProject.API.Dtos;
using CetunaProject.API.Helpers;
using CetunaProject.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace CetunaProject.API.Controllers
{
    [Authorize]
    [Route("api/alumnos/{alumnoId}/documentos")]
    [ApiController]
    public class DocumentosController : ControllerBase
    {
        private readonly ICetunaRepository<Alumno> alumnoRepo;
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly BaseRepository<DocumentoAlumno> docRepo;
        private readonly IMapper mapper;
        public DocumentosController(ICetunaRepository<Alumno> alumnoRepo, BaseRepository<DocumentoAlumno> docRepo, 
                                    IWebHostEnvironment hostEnvironment, IMapper mapper)
        {
            this.mapper = mapper;
            this.docRepo = docRepo;
            this.webHostEnvironment = hostEnvironment;
            this.alumnoRepo = alumnoRepo;
        }

        [HttpGet("{id}", Name = "GetDocumento")]
        public async Task<IActionResult> GetDocumento(int id)
        {
            var documentoFromRepo = await this.docRepo.GetOne(id);
            var documento = this.mapper.Map<DocumentoForDetailDto>(documentoFromRepo);

            return Ok(documento);
        }
        
        [HttpPost]
        public async Task<IActionResult> AgregarDocumento(int alumnoId, [FromForm]DocumentoForCreationDto documentoDto)
        {
            var alumnoFromRepo = await this.alumnoRepo.GetOne(alumnoId);

            DocumentoAlumno documento = new DocumentoAlumno
            {
                Descripcion = documentoDto.Descripcion,
                EsFoto = documentoDto.EsFoto,
                FechaAlta = documentoDto.FechaAlta,
                Url = Utils.UploadedFile(documentoDto, webHostEnvironment)
            };

            alumnoFromRepo.Documentos.Add(documento);

            if (await this.alumnoRepo.SaveAll())
            {
                var documentoToReturn = this.mapper.Map<DocumentoForDetailDto>(documento);
                return CreatedAtRoute("GetDocumento", new { alumnoId = alumnoId, id = documento.Id}, documentoToReturn);
            }

            return BadRequest("No se pudo agregar el documento");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> BorrarDocumento(int id, int alumnoId) 
        {
            var docABorrar = await this.docRepo.GetOne(id);

            if (docABorrar == null)
                return BadRequest("Documento no encontrado");

            if(docABorrar.AlumnoId != alumnoId)
                return Unauthorized($"El documento {id} no correspode al alumno {alumnoId}");

            Utils.DeleteFile(docABorrar.Url, webHostEnvironment);            

            this.docRepo.Delete(docABorrar);

            if(await this.docRepo.SaveAll())
                 return Ok();

            return BadRequest($"Error al eliminar el documento {id}");
        }
    }
}