using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication2.Models
{
    public partial class UserModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string EmailAddress { get; set; }
        public string Role { get; set; }
    }
}
