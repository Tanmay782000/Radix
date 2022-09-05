using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class LocationDetail
    {
        public LocationDetail()
        {
            BookingRequestDestinationNavigations = new HashSet<BookingRequest>();
            BookingRequestSourceNavigations = new HashSet<BookingRequest>();
        }

        public int LocationDetails { get; set; }
        public string LocationName { get; set; }
        public string LocationAddress { get; set; }
        public long Pincode { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<BookingRequest> BookingRequestDestinationNavigations { get; set; }
        public virtual ICollection<BookingRequest> BookingRequestSourceNavigations { get; set; }
    }
}
