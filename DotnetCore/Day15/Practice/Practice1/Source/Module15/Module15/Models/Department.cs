using System;
using System.Collections.Generic;

#nullable disable

namespace Module15.Models
{
    public partial class Department
    {
        public Department()
        {
            ToyManufectoringDetails = new HashSet<ToyManufectoringDetail>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<ToyManufectoringDetail> ToyManufectoringDetails { get; set; }
    }
}
