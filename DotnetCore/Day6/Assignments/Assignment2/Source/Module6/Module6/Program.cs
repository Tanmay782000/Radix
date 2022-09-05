using System;

namespace Module6
{
    public delegate void MyDeligate(int a , int b);
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter One number");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Second number");
            int b = Convert.ToInt32(Console.ReadLine());
            MyDeligate MyDel = new MyDeligate((a, b) => Console.WriteLine($"Addion of two number is:{a + b}")); //using lemda expression 
            MyDel(a, b);

        }
    }
}
