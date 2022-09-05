using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class RidePin
    {
        public int RidePin1 { get; set; }
        public long? Pin { get; set; }
        public int? BooingId { get; set; }

        public virtual BookingRequest Booing { get; set; }
    }
}
