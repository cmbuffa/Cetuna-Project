using System.Collections.Generic;
using System.Threading.Tasks;

namespace CetunaProject.API.Data
{
    public abstract class BaseRepository<T> : ICetunaRepository<T> where T : class
    {
        protected readonly DataContext context;

        public BaseRepository(DataContext context)
        {
            this.context = context;

        }
        public void Add(T entity)
        {
            this.context.Add(entity);
        }

        public void Delete(T entity)
        {
            this.context.Remove(entity);
        }

        public abstract Task<IEnumerable<T>> GetAll();
        public abstract Task<T> GetOne(int id);
        
        public async Task<bool> SaveAll()
        {
            return await this.context.SaveChangesAsync() > 0;
        }
    }
}