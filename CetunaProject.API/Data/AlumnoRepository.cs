using System.Linq;
using System.Threading.Tasks;
using CetunaProject.API.Helpers;
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

        public async Task<PagedList<Alumno>> GetAll(UserParams userParams)
        {
            var alumnos = this.context.Alumnos.Include(a => a.Documentos).AsQueryable();

            if(userParams.Description != null)
                alumnos = alumnos.Where(a => EF.Functions.Like(a.Apellidos, $"%{userParams.Description}%"));
            
            if(userParams.Id != 0)
                alumnos = alumnos.Where(a => a.Cedula == userParams.Id);

            return await PagedList<Alumno>.CreateAsync(alumnos, userParams.PageNumber,userParams.PageSize);
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