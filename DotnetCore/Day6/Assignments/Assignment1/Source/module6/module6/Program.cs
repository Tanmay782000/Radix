using System;

namespace module6
{
    public delegate void D_triangle(int n,int m);

    public static class Triangle
    {
        public static void compute(int n,int m)
        {

            int res = (int)(0.5 *n * m);
            Console.WriteLine(res);
        }
        public static void myc(int n,int m)
        {
            int res = (int)(n * m);
            Console.WriteLine(res);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var D1 = new D_triangle(Triangle.compute);
            D1(72,78);
        }
    }
}
