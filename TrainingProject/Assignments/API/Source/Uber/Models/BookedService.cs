using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class BookedService
    {
        public int BookedService1 { get; set; }
        public int? DriverId { get; set; }
        public int? PatmentId { get; set; }
        public int? StatusId { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int? BookingId { get; set; }
        public int? PhoneId { get; set; }
        public int? VehicleDetailsId { get; set; }

        public virtual BookingRequest Booking { get; set; }
        public virtual Driver Driver { get; set; }
        public virtual Payment Patment { get; set; }
        public virtual PhoneNo Phone { get; set; }
        public virtual ObjectDetail Status { get; set; }
    }
}
