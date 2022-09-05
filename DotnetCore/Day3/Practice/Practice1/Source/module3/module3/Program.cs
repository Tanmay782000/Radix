using System;

namespace module3
{

    public abstract class One
    {

        public abstract void mydata();

    }

   public class Two:One
    {
        public override void mydata()
        {
            Console.WriteLine("hello i'm here");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var on = new Two();
            on.mydata();
            
        }
    }
}
