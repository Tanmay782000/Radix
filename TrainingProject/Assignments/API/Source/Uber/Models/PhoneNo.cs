using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class PhoneNo
    {
        public PhoneNo()
        {
            BookedServices = new HashSet<BookedService>();
            BookingRequests = new HashSet<BookingRequest>();
            Customers = new HashSet<Customer>();
        }

        public int PhoneId { get; set; }
        public long MobileNo { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<BookedService> BookedServices { get; set; }
        public virtual ICollection<BookingRequest> BookingRequests { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
    }
}
