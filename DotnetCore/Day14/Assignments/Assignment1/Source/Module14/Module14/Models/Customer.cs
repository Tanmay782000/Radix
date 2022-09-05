using System;
using System.Collections.Generic;

#nullable disable

namespace Module14.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
        }

        public int CustomerId { get; set; }
        public string CustName { get; set; }
        public string CustEmail { get; set; }
        public string CustAddress { get; set; }
        public long? CustPhone { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
