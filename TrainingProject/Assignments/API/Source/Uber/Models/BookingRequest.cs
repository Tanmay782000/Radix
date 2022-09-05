using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class BookingRequest
    {
        public BookingRequest()
        {
            BookedServices = new HashSet<BookedService>();
            Payments = new HashSet<Payment>();
            RidePins = new HashSet<RidePin>();
        }

        public int BookingId { get; set; }
        public int PhoneId { get; set; }
        public int Source { get; set; }
        public int Destination { get; set; }
        public int StatusId { get; set; }
        public long Distance { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int? VehicleId { get; set; }

        public virtual LocationDetail DestinationNavigation { get; set; }
        public virtual PhoneNo Phone { get; set; }
        public virtual LocationDetail SourceNavigation { get; set; }
        public virtual ObjectDetail Status { get; set; }
        public virtual ObjectDetail Vehicle { get; set; }
        public virtual ICollection<BookedService> BookedServices { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<RidePin> RidePins { get; set; }
    }
}
