using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber.Models
{
    [Keyless]
    public class DriverHistoryDTO
    {
        public long phnId { get; set; }
        public string objName { get; set; }
        public DateTime cdate { get; set; }
        public string sourcetoDestination { get; set; }
    }
}
