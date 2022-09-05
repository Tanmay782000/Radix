using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class DoctorDetail
    {
        public DoctorDetail()
        {
            PatientDetails = new HashSet<PatientDetail>();
        }

        public int DoctorId { get; set; }
        public int? DepartmentId { get; set; }
        public string Name { get; set; }
        public string Education { get; set; }
        public string Specialization { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<PatientDetail> PatientDetails { get; set; }
    }
}
