using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

#nullable disable

namespace Module11.Models
{
    public partial class Report
    {
        public int ReportId { get; set; }
        public int? PatientId { get; set; }
        public int? Drugs { get; set; }
        public string Dosage { get; set; }
        public string Summery { get; set; }
        public long? Price { get; set; }

        public virtual Drug DrugsNavigation { get; set; }
        public virtual PatientDetail Patient { get; set; }
    }
    [Keyless]
    public class PatientReport
    {
        public int ReportId { get; set; }
        public int PatientID { get; set; }
        public string name { get; set; }
        public string summery { get; set; }
        public long price { get; set; }
        public string BloodGroup { get; set; }
        public string assistants { get; set; }
        public string DrugName { set; get; }
    }
}
