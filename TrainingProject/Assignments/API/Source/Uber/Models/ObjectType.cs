using System;
using System.Collections.Generic;

#nullable disable

namespace Uber.Models
{
    public partial class ObjectType
    {
        public ObjectType()
        {
            ObjectDetails = new HashSet<ObjectDetail>();
        }

        public int ObjTypeId { get; set; }
        public string ObjName { get; set; }

        public virtual ICollection<ObjectDetail> ObjectDetails { get; set; }
    }
}
