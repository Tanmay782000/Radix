using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class VehicleDetail
    {
        public VehicleDetail()
        {
            DiverConfirmationDetails = new HashSet<DiverConfirmationDetail>();
        }

        public int VehicleId { get; set; }
        public int DriverId { get; set; }
        public int VehicleType { get; set; }
        public string License { get; set; }
        public string Rcbook { get; set; }
        public string Adharchad { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string VehicleName { get; set; }

        public virtual Driver Driver { get; set; }
        public virtual ObjectDetail VehicleTypeNavigation { get; set; }
        public virtual ICollection<DiverConfirmationDetail> DiverConfirmationDetails { get; set; }
    }
}
