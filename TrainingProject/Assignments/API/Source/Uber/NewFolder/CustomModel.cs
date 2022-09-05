using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber
{
    [Keyless]
    public class CustomModel
    {
       public int price { get; set; }
       public int vehicleID { get; set; }
    }
}
