using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class Department
    {
        public Department()
        {
            DoctorDetails = new HashSet<DoctorDetail>();
            HealthCareAssistants = new HashSet<HealthCareAssistant>();
            PatientDetails = new HashSet<PatientDetail>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<DoctorDetail> DoctorDetails { get; set; }
        public virtual ICollection<HealthCareAssistant> HealthCareAssistants { get; set; }
        public virtual ICollection<PatientDetail> PatientDetails { get; set; }
    }
}
