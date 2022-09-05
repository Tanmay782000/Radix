using System;
using System.Collections.Generic;

#nullable disable

namespace Module14.Models
{
    public partial class Order
    {
        public Order()
        {
            PlacedOrders = new HashSet<PlacedOrder>();
        }

        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public string AddressOfDelivery { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? OrderStatus { get; set; }
        public decimal? TotalAmount { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<PlacedOrder> PlacedOrders { get; set; }
    }
}
