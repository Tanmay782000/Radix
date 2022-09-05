using System;
using System.Collections.Generic;

namespace Module5
{ 
   public class product
    {
        public string MyValue; 
        public product(string value)
        {
            this.MyValue = value;
        }
        public void display()
        {
            Console.WriteLine($"{this.MyValue}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {    
            string name = Console.ReadLine();
            int ct = 0;
            int count = 1;

            Dictionary<int, product> d = new Dictionary<int, product>();

            Console.WriteLine("enter the number of values");
            int ent = Convert.ToInt32(Console.ReadLine());

            while (ct < ent)
            {
                Console.WriteLine("Enter the values");
                string value = Console.ReadLine();
                d.Add(count++,new product(value));
                ct++;
            }

            Console.WriteLine("Enter the index number:");
            int search = Convert.ToInt32(Console.ReadLine());
            foreach (var item in d)
            {
                if(item.Key == search)
                {
                    var p = item.Value;
                    Console.WriteLine($"Key:{item.Key} values:{p.MyValue}");
                }
            }
        }
    }
}

