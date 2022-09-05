using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module14.Models
{
    public class PlaceOrd
    {
        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public string AddressOfDelivery { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? OrderStatus { get; set; }
        public decimal? TotalAmount { get; set; }
        
        public List<PlacedOrder> PlaceOrderDetail { get; set; }
    }
    public class PlaceOrdDetails
    {
        public int OrderPlacedId { get; set; }

        public int? OrderId { get; set; }
        public int? ToyId { get; set; }
        public decimal? Price { get; set; }
    }

}
