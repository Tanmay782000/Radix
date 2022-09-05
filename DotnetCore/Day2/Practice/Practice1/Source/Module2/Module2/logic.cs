using System;


namespace Module_2
{
    public class AllMethods
    {
        private double length;

        public double Length { get
            { 
                return length; 
            } 
            set 
            {
                if (value > 4) { length = value; }
            } 
        }
        public bool check
        {
            get
            {
                if (length > 5) return true;
                return false;
            }
        }


        public static void Method2()
        {
            Console.WriteLine("hello");
        }
    }
}