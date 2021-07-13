using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserPhone { get; set; }
        //[RegularExpression(@"^[^@\s]+@[^@\s]+\.[^@\s]+$", ErrorMessage = "Некорректный адрес")]
        public string UserEmail { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
        public User()
        {
            Messages = new List<Message>();
        }
    }
}
