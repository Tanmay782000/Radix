using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class CompletedService
    {
        public int Serviceid { get; set; }
        public string Feedback { get; set; }
        public int? Ratings { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
