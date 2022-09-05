using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uber.Models
{
    [Keyless]
    public class CancelRequestDTO
    {
        public int id {get; set;}
    }
}
