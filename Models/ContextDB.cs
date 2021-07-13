
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class ContextDB : DbContext
    {
        public DbSet<Message> Messages { get; set; }
        public DbSet<Theme> Themes { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
