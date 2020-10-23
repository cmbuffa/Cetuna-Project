using System.Collections.Generic;
using System.Threading.Tasks;
using CetunaProject.API.Helpers;
using CetunaProject.API.Models;

namespace CetunaProject.API.Data
{
    public interface ICetunaRepository<T> where T: class
    {
        void Add(T entity);
        void Delete(T entity);
        Task<bool> SaveAll();
        Task<PagedList<T>> GetAll(UserParams userParams);
        Task<T> GetOne(int id);
    }
}