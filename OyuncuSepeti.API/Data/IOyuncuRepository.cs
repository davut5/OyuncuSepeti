using System.Collections.Generic;
using System.Threading.Tasks;
using OyuncuSepeti.API.Models;

namespace OyuncuSepeti.API.Data
{
    public interface IOyuncuRepository
    {
         void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll(); 
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhotoForUser(int userId);

    }
}