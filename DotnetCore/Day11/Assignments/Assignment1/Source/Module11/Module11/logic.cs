using Module11.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Module11
{

    public class logic
    {
        Models.hospital2Context DataBase = new Models.hospital2Context();
        public void InsertDoctor()
        {
          

            Console.WriteLine("Enter Doctor Id");
            int D_Id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Department Id");
            int Dept_Id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Doctor Name:");
            string D_name = Console.ReadLine();

            Console.WriteLine("Enter Education:");
            string D_education = Console.ReadLine();

            Console.WriteLine("Enter Education:");
            string D_specialization = Console.ReadLine();

            DoctorDetail doctorDetails = new DoctorDetail()
            {
                DoctorId = D_Id,
                DepartmentId = Dept_Id,
                Name = D_name,
                Education = D_education,
                Specialization = D_specialization,
            };
            DataBase.DoctorDetails.Add(doctorDetails);
            DataBase.SaveChanges();
        }

        public void ShowDoctor()
        {
            var ShowDepartment = DataBase.DoctorDetails.ToList();
            
            foreach (var item in ShowDepartment)
            {
                Console.WriteLine($"ID:{item.DoctorId} \t Dept ID:{item.DepartmentId} \t Doctor Name:{item.Name} \t Education:{item.Education} \t Specialization:{item.Specialization}");
            }
        }
        public void UpdateDoctor()
        {
            Console.WriteLine("Enter the id of doctor");
            var D_ID = Convert.ToInt32(Console.ReadLine());

            var td = this.DataBase.DoctorDetails.ToList();
            var md = td.Find(e => e.DepartmentId == D_ID);

            Console.WriteLine("Enter Id Of Doctor");
            var D_ID2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Department Id Of Doctor");
            var Dept_Id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Name Of Doctor");
            var D_name = Console.ReadLine();

            md.DoctorId = D_ID2;
            md.DepartmentId = Dept_Id;
            md.Name = D_name;

            this.DataBase.Add(md);
            this.DataBase.SaveChanges();
        }

        public void DeleteDoctor()
        {
            Console.WriteLine("Enter Doctor's For delete whole object");
            var D_ID = Convert.ToInt32(Console.ReadLine());

            var GetList = this.DataBase.DoctorDetails.ToList();
            var FindObj = GetList.Find(e => e.DoctorId == D_ID);
            this.DataBase.Remove(FindObj);
            this.DataBase.SaveChanges();
        }
        public void AddReport()
        {
            Console.WriteLine("Enter the ReportID");
            int ReportId = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the PatientID");
            int PatientID = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the Drugs");
            int Drugs = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the Dosage");
            string Dosage = Console.ReadLine();

            Console.WriteLine("Enter the Summery");
            string Summery = Console.ReadLine();

            Console.WriteLine("Enter the Price");
            long price = Convert.ToInt64(Console.ReadLine());

            Report rt = new Report();
            {
                rt.ReportId = ReportId;
                rt.PatientId = PatientID;
                rt.Drugs = Drugs;
                rt.Dosage = Dosage;
                rt.Summery = Summery;
                rt.Price = price;
            }
            this.DataBase.Add(rt);
            this.DataBase.SaveChanges();
        }

        public void ShowReport()
        {
            Console.WriteLine("Enter the ID to Get the Information");
            int Pid = Convert.ToInt32(Console.ReadLine());
             
            var repor = DataBase.PatientReport.FromSqlRaw($"exec Get_Report {Pid}").ToList(); 
            foreach(var item in repor)
            {
                Console.WriteLine($"Report ID:{item.ReportId} \t Patient ID:{item.PatientID} \t Patient Name:{item.name} \t Blood Group:{item.BloodGroup}\t Assistants:{item.assistants}\t Drug Name:{item.DrugName} \t Price:{item.price} \t Summery:{item.summery}");
            }
        }

        public override bool Equals(object obj)
        {
            return obj is logic logic &&
                   EqualityComparer<object>.Default.Equals(DataBase, logic.DataBase);
        }
    }

}

