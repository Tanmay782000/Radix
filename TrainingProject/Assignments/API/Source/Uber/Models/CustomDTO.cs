using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber.Models
{
    [Keyless]
    public class CustomDTO
    {
        public int BookingId { get; set; }
        public long MobileNo { get; set; }
        public string LocationName { get; set; }
        public string LocationAddress { get; set; }
        public long Distance { get; set; }
        public int LocationDetails { get; set; }
        //now
        public int PhoneId { get; set; }
        public int VehicleId { get; set; }
        public int PaymentId { get; set; }
    }
}
