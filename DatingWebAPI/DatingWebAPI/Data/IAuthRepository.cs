using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingWebAPI.Models;


namespace DatingWebAPI.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        //to check if username already exists in database.
        Task<bool> UserExists(string username);
    }
}
