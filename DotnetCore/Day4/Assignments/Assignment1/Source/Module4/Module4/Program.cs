using System;
using System.Text.RegularExpressions;

namespace Module4
{
    public class mathexception : Exception
    {
        public mathexception(String msg) : base(msg)
        {

        }
    }

    public class nameexception : Exception
    {
        public nameexception(String msg) : base(msg)
        {

        }
    }

    public static class student
    {
        public static string name { get; set; }
        public static void check(int age)
        {
            if (age < 0)
            {
                throw new mathexception("age must be greater than 15");
            }
            else
            {
                Console.WriteLine("You are above 0");
            }
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Age");

            int age = Convert.ToInt32(Console.ReadLine());
            try
            {
                student.check(age);
            }
            catch (mathexception e)
            {
                Console.WriteLine(e);
            }

            Console.WriteLine("Enter name");
          
        }
    }
}
