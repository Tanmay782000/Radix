using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class AdminDetail
    {
        public int AdminId { get; set; }
        public string AdminName { get; set; }
        public string AdminUsername { get; set; }
        public string AdminPassword { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
