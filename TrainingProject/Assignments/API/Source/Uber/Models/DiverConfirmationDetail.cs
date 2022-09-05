using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class DiverConfirmationDetail
    {
        public int DcDetailsId { get; set; }
        public int DriverId { get; set; }
        public int VehicleId { get; set; }
        public int StatusId { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Driver Driver { get; set; }
        public virtual ObjectDetail Status { get; set; }
        public virtual VehicleDetail Vehicle { get; set; }
    }
}
