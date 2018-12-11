using System.Threading.Tasks;
using OyuncuSepeti.API.Models;

namespace OyuncuSepeti.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register (User user, string password);
         Task<User> Login (string username, string password);

          Task<bool> UserExists (string username);


    }
}