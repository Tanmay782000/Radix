using System;

namespace Module6
{
    public delegate void MyDeligate(int a,int b);
    class Program
    {
        static void Main(string[] args)
        {
            MyDeligate del = new MyDeligate((a,b)=>Console.WriteLine(a+b)); //lemda expression
            del(45,45);
        }
    }
}
