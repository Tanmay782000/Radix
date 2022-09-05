using System;

namespace Module6
{
    public delegate void d_sub(int a, int b);
    public delegate void d_add(int a, int b);



    public static class student
    {
        public static void add(int a,int b)
        {
            Console.WriteLine(a + b);
        }
        public static void sub(int a,int b)
        {
            Console.WriteLine(a - b);
        }
    }


   public class mainclass
    {
        public static void Main(string[] args)
        {
            var d1 = new d_add(student.add);
            var d2 = new d_sub(student.sub);
            d1(30, 30);
            d2(60, 30);
        }
    }
}