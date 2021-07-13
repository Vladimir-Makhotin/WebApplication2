using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Theme
    {
        public int ThemeId { get; set; }
        public string ThemeName { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
        public Theme()
        {
            Messages = new List<Message>();
        }
    }
}
