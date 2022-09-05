using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Module12.Models
{
    public class OrderModel
    {
        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public string AddressOfDelivery { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? OrderStatus { get; set; }
        public decimal? TotalAmount { get; set; }
        public List<OrderDetailModel> orderDetailModels { get; set; }
    }
    public class OrderDetailModel
    {

        public int? OrderId { get; set; }
        public int? ToyId { get; set; }
        public decimal? Price { get; set; }
    }
}
