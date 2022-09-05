using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class HealthCareAssistant
    {
        public int HcaId { get; set; }
        public int? DepartmentId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Education { get; set; }
        public string PhoneNo { get; set; }
        public int? PatientId { get; set; }

        public virtual Department Department { get; set; }
    }
}
