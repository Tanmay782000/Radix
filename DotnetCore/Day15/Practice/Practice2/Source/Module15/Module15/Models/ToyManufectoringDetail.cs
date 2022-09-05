using System;
using System.Collections.Generic;

#nullable disable

namespace Module15.Models
{
    public partial class ToyManufectoringDetail
    {
        public ToyManufectoringDetail()
        {
            PlacedOrders = new HashSet<PlacedOrder>();
        }

        public int ToyId { get; set; }
        public int? DeptId { get; set; }
        public long? ModelNo { get; set; }
        public string Guarantee { get; set; }
        public string Warrenty { get; set; }
        public long? Price { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<PlacedOrder> PlacedOrders { get; set; }
    }
}
