using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class ObjectDetail
    {
        public ObjectDetail()
        {
            BookedServices = new HashSet<BookedService>();
            BookingRequestStatuses = new HashSet<BookingRequest>();
            BookingRequestVehicles = new HashSet<BookingRequest>();
            DiverConfirmationDetails = new HashSet<DiverConfirmationDetail>();
            Payments = new HashSet<Payment>();
            VehicleDetails = new HashSet<VehicleDetail>();
        }

        public int ObjectDetailsId { get; set; }
        public int ObjectTypeId { get; set; }
        public string ObjName { get; set; }

        public virtual ObjectType ObjectType { get; set; }
        public virtual ICollection<BookedService> BookedServices { get; set; }
        public virtual ICollection<BookingRequest> BookingRequestStatuses { get; set; }
        public virtual ICollection<BookingRequest> BookingRequestVehicles { get; set; }
        public virtual ICollection<DiverConfirmationDetail> DiverConfirmationDetails { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<VehicleDetail> VehicleDetails { get; set; }
    }
}
