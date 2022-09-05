using System;
using System.Collections.Generic;

#nullable disable

namespace Module15.Models
{
    public partial class PlacedOrder
    {
        public int OrderPlacedId { get; set; }
        public int? OrderId { get; set; }
        public int? ToyId { get; set; }
        public decimal? Price { get; set; }

        public virtual Order Order { get; set; }
        public virtual ToyManufectoringDetail Toy { get; set; }
    }
}
