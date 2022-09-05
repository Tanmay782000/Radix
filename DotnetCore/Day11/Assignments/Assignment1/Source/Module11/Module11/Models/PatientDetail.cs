using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class PatientDetail
    {
        public PatientDetail()
        {
            Reports = new HashSet<Report>();
        }

        public int PatientId { get; set; }
        public int? DepartmentId { get; set; }
        public int? DoctorId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public long? PhoneNo { get; set; }
        public string BloodGroup { get; set; }

        public virtual Department Department { get; set; }
        public virtual DoctorDetail Doctor { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}
