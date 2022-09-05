using System;
using System.Text.RegularExpressions;

namespace module4
{

    public class NameException : Exception
    {
        public NameException(String msg) : base(msg)
        {

        }
    }


    public class DateException : Exception
    {
        public DateException(String msg) : base(msg)
        {

        }
    }

    public static class DateFunction
    {
        public static void DateFun(String date)
        {
            DateTime now = DateTime.Now;
            var DT = now.ToString("dd/MM/yyyy");
            if (DT == date)
            {
                Console.WriteLine("matched");
            }
            else
            {
                throw new DateException("today's date is not matched with input date");
            }
        }
    }
    public static class student
    {
        public static void name_validation(string name)
        {
            string pattern = "[^a-zA-Z0-9]+";
            Regex rex = new Regex(pattern);
            if (rex.IsMatch(name))
            {
                Console.WriteLine("String match");
            }
            else
            {
                throw new NameException("Not valid name");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please Enter date in dd-mm-yyyy format");
            Console.WriteLine("enter Date:");
            string date = Console.ReadLine();
            try
            {
                DateFunction.DateFun(date);
                Console.WriteLine("----------------------------------------------------------------------------");
            }
            catch (DateException e)
            {
                Console.WriteLine(e);
                Console.WriteLine("----------------------------------------------------------------------------");
            }

            Console.WriteLine("Enter the Name:");
            string name = Console.ReadLine();
            try
            {
                student.name_validation(Convert.ToString(name));

            }
            catch (NameException e)
            {
                Console.WriteLine(e);
            }

        }
    }
}
