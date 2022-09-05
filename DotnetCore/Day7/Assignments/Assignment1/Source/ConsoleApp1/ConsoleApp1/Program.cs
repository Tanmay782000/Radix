using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Module7
{
    class Employee
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public double Salary { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Deparment { get; set; }
    }
    class Incentive
    {
        public int ID { get; set; }
        public double IncentiveAmount { get; set; }
        public DateTime IncentiveDate { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
                new Employee()
                {
                    ID = 1,
                    FirstName = "John",
                    LastName = "Abraham",
                    Salary = 1000000,
                    JoiningDate = new DateTime(2013, 1, 1),
                    Deparment = "Banking"
                },
                 new Employee()
                 {ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },
                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},
                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},
                new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}
            };
            List<Incentive> incentives = new List<Incentive>()
            {
                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},
                 new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},
                 new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},
                 new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}
            };


            //Get employee details from employees object whose employee name is “John” (note restrict operator)
            var result = from ep in employees.Where(a=>a.FirstName == "John")
                         join inc in incentives on ep.ID equals inc.ID
                         select new 
                         {
                             emp_Id = ep.ID,
                             Name = ep.FirstName + ep.LastName,
                             Incentive_Amount = inc.IncentiveAmount
                         };
            foreach (var item in result)
            {
                Console.WriteLine($"ID:{item.emp_Id} \n Name:{item.Name} \n Incentive Amount:{item.Incentive_Amount}");
            }

            Console.WriteLine("----------------------------------------------------------------------------------------");
            //Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var result1 = employees.Select(e => e.FirstName + ' ' + e.LastName);

            foreach(var item in result1)
            {
                Console.WriteLine($"{item}");
            }
            Console.WriteLine("----------------------------------------------------------------------------------------");
            //Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            var result3 = from ep in employees
                         join inc in incentives on ep.ID equals inc.ID
                         select new
                         {
                             emp_Id = ep.ID,
                             Name = ep.FirstName + ep.LastName,
                             Incentive_Amount = inc.IncentiveAmount
                         };
            foreach (var item in result3)
            {
                Console.WriteLine($"\n ID:{item.emp_Id} \n Name:{item.Name} \n Incentive Amount:{item.Incentive_Amount}");
            }

            Console.WriteLine("----------------------------------------------------------------------------------------");
            //Get department wise maximum salary from employee table order by salary ascending (note group by)


            var result4 = from ad in employees
                          orderby ad.Salary ascending
                          select new
                          {
                              name = ad.FirstName + ad.LastName,
                              department = ad.Deparment,
                              salary = ad.Salary
                          };


            foreach (var item in result4)
            {
                Console.WriteLine($"Name:{item.name} \n Department {item.department} \n Salary {item.salary}");
            }

            Console.WriteLine("-----------------------------------------------------------------------------------------");
            //Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            var result5 = from ad in employees
                          orderby ad.Salary 
                          group ad by ad.Salary into emp
                          where emp.Key > 800000
                          select emp;

            foreach (var item in result5)
            {
                foreach (var itd in item)
                {
                    Console.WriteLine($"\n Name:{itd.FirstName} \n Department:{itd.Deparment} \n Salary:{itd.Salary} \n");
                }
            }

        }
    }
}