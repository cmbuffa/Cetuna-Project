using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CetunaProject.API.Helpers;
using CetunaProject.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CetunaProject.API.Data
{
    public class DocumentoRepository : BaseRepository<DocumentoAlumno>
    {
        public DocumentoRepository(DataContext context) : base(context)
        {
        }

        public override async Task<PagedList<DocumentoAlumno>> GetAll(UserParams userParams)
        {
            var documentos = this.context.DocumentosAlumno;
            return await PagedList<DocumentoAlumno>.CreateAsync(documentos, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<IEnumerable<DocumentoAlumno>> GetByAlumno(int idAlumno)
        {
            var documentos = await this.context.DocumentosAlumno.Where(d => d.AlumnoId == idAlumno).ToListAsync();
            return documentos;
        }

        public override async Task<DocumentoAlumno> GetOne(int id)
        {
            var documento = await this.context.DocumentosAlumno.Where(d => d.Id == id).SingleOrDefaultAsync();
            return documento;
        }
    }
}