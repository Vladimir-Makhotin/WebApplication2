using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public string MessageContent { get; set; }
        public int? rf_ThemeId { get; set; }
        public int? rf_UserId { get; set; }
        public Theme Theme { get; set; }
        public User User { get; set; }
    }
}
