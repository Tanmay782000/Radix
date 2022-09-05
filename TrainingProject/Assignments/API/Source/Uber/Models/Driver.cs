using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class Driver
    {
        public Driver()
        {
            BookedServices = new HashSet<BookedService>();
            DiverConfirmationDetails = new HashSet<DiverConfirmationDetail>();
            VehicleDetails = new HashSet<VehicleDetail>();
        }

        public int DriverId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public long PhoneNo { get; set; }
        public string ProfilePhoto { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Address { get; set; }

        public virtual ICollection<BookedService> BookedServices { get; set; }
        public virtual ICollection<DiverConfirmationDetail> DiverConfirmationDetails { get; set; }
        public virtual ICollection<VehicleDetail> VehicleDetails { get; set; }
    }
}
