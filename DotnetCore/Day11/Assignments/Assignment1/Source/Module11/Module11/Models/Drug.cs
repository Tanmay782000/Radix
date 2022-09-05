using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class Drug
    {
        public Drug()
        {
            Reports = new HashSet<Report>();
        }

        public int DrugId { get; set; }
        public string DrugName { get; set; }
        public string DrugType { get; set; }
        public string DrugUse { get; set; }

        public virtual ICollection<Report> Reports { get; set; }
    }
}
