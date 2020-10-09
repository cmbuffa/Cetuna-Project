using CetunaProject.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CetunaProject.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<DocumentoAlumno> DocumentosAlumno { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}