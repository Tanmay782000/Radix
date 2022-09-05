using System;

namespace Module4
{
    public class mathexception: Exception
    {
        public mathexception(String msg):base(msg)
        {

        }
    }


   public static class student
    {
        public static void check()
        {
            try
            {
                int a = 34;
                int b = 0;
                int c = a / b;
                Console.WriteLine($"Division result:{c}");
            }
            catch(DivideByZeroException e)
            {
                Console.WriteLine(e);
            }
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            student.check();
        }
    }
}
