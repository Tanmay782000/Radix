using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class Payment
    {
        public Payment()
        {
            BookedServices = new HashSet<BookedService>();
        }

        public int PaymentId { get; set; }
        public int BookingId { get; set; }
        public int PaymentMethod { get; set; }
        public long Amount { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual BookingRequest Booking { get; set; }
        public virtual ObjectDetail PaymentMethodNavigation { get; set; }
        public virtual ICollection<BookedService> BookedServices { get; set; }
    }
}
