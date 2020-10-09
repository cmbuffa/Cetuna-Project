using System.Threading.Tasks;
using CetunaProject.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CetunaProject.API.Data
{
    public class AlumnoRepository : ICetunaRepository<Alumno>
    {
        private readonly DataContext context;
        public AlumnoRepository(DataContext context)
        {
            this.context = context;

        }
        public void Add(Alumno entity)
        {
            this.context.Add(entity);
        }

        public void Delete(Alumno entity)
        {
            this.context.Remove(entity);
        }

        public async Task<System.Collections.Generic.IEnumerable<Alumno>> GetAll()
        {
            var alumnos = await this.context.Alumnos.Include(a => a.Documentos).ToListAsync();
            return alumnos;
        }

        public async Task<Alumno> GetOne(int id)
        {
            var alumno = await this.context.Alumnos.Include(a => a.Documentos).FirstOrDefaultAsync(f => f.Id == id);

            return alumno;
        }

        public async Task<bool> SaveAll()
        {
            return await this.context.SaveChangesAsync() > 0;
        }
    }
}