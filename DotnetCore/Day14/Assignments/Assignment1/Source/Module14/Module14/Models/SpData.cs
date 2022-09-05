using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module14.Models
{
    [Keyless]
    public class SpData
    {
            public int CustomerID { get; set; }
            public string CustName { get; set; }
            public int OrderID { get; set; }
            public string DeptName { get; set; }
            public string AddressOfDelivery { get; set; }
            public int Order_placed_Id { get; set; }
            public int toyID { get; set; }
            public string Guarantee { get; set; }
            public string warrenty { get; set; }
            public decimal Price { get; set; }


    }
}
