using System;
using System.Linq;
using System.Collections.Generic;


namespace module7
{
    public class Student{
        public int StudentID;
        public string StudentName;
        public int Age;
           }
class Program
    {

        static void Main(string[] args)
        {
            List<string> stringList = new List<string>() {
            "C# Tutorials",
            "VB.NET Tutorials",
            "Learn C++",
            "MVC Tutorials" ,
            "Java"
        };

            // Where & Contains
            Console.WriteLine("------------------------------Where------------------------------");
            var where = stringList.Where(s => s.Contains("Tutorials"));

            foreach(var item in where)
            {
                Console.WriteLine(item);
            }

            //TypeOf
            Console.WriteLine("------------------------------TypeOf------------------------------");
            var TypeOf = from x in stringList.OfType<string>()
                            select x;

            foreach (var item in TypeOf)
            {
                Console.WriteLine(item);
            }

            //OrderBy
            Console.WriteLine("------------------------------OrderBy------------------------------");
            //ascending
            var Orderby1 = from x in stringList
                          orderby x
                          select x;

            foreach (var item in Orderby1)
            {
                Console.WriteLine(item);
            }
            //decending
            Console.WriteLine("-------------------------------------------------------------------");
            var Orderby2 = from x in stringList
                          orderby x descending
                          select x;

            foreach (var item in Orderby2)
            {
                Console.WriteLine(item);
            }


            //Groupby
            Console.WriteLine("------------------------------Groupby------------------------------");

            IList<Student> studentList = new List<Student>() {
            new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
            new Student() { StudentID = 5, StudentName = "Abram" , Age = 21 }
             };


            var groupedResult = from s in studentList
                                group s by s.Age;

              
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group:" +  ageGroup.Key); 

                foreach (var s in ageGroup)
                {
                    Console.WriteLine("Student Name:" + s.StudentName);
                }
            }

            //lookup
            Console.WriteLine("------------------------------LookUp------------------------------");

            var lookup = studentList.ToLookup(x => x.StudentID);
            foreach (var KeyValurPair in lookup)
            {
                Console.WriteLine(KeyValurPair.Key);
                // Lookup employees by Department  
                foreach (var item in lookup[KeyValurPair.Key])
                {
                    Console.WriteLine("\t" + item.StudentID + "\t" + item.StudentName + "\t" + item.Age);
                }
            }


            Console.WriteLine("-----------------------------Join----------------------------------");
            List<string> str1 = new List<string>()
            {
                "first",
                    "second",
                    "third",
            };
            List<string> str2 = new List<string>()
            {
                "first",
                    "second",
                    "fourth",
                    "fifth"
            };

            var std = from q in str1
                      join p in str2 on q equals p into empDept

                      from tm in empDept.DefaultIfEmpty()

                      select new
                      {
                          Newproduct = q,
                          New1product = tm == null ? "No Department" : tm
                      };
                     
            foreach(var item in std)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("-------------------------------select-------------------------------");


            //count length of string
            var select = str1.Select(e => e.Length);
            var select2 = str1.Select(e => e.Contains("second"));

            foreach (var item in select)
            {
                Console.WriteLine(item);
            }
            foreach (var item in select2)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("------------------------------String aggregate-----------------------------------");
            var myarg = str1.Aggregate((s1,s2) => s1 + ',' + s2);
            Console.WriteLine(myarg);
        }
    }
}
