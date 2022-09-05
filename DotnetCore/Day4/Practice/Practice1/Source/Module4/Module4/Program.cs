using System;

namespace Module4
{
    class student
    {
        public virtual void myfun()
        {
            Console.WriteLine("main");
        }
    }
    class teacher:student
    {
        public override void myfun()
        {
            base.myfun(); // base method
            Console.WriteLine("extracted");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            student std = new teacher();
            std.myfun();
        }
    }

}
