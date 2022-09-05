using System;

namespace Module_2
{
    class Program
    {
        static void Main(String[] args)
        {
            Console.WriteLine("enter the age");
            var mds = Convert.ToInt32(Console.ReadLine());
            var AllMethods = new AllMethods();
            var md  = AllMethods.Length = mds;
            Console.WriteLine(AllMethods.check);
            Console.WriteLine(md);
        }
    }
}
