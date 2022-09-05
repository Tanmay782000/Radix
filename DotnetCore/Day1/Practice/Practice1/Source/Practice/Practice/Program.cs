using System;

namespace Practice
{
    class Program
    {
        //enums

        public enum student
        {
            male,
            female,
        }
        static void stu()
        {
            //calling the values from enum
            Console.WriteLine($"{student.male} {student.female}");
            //convert the enum values into integer
            Console.WriteLine(Convert.ToInt32(student.male));
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            stu();
        }
    }
}
