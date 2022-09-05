using System;
using System.Collections;

namespace Module5
{


    public static class Person
    {
        public static void age()
        {
            int count = 0;
            Stack mystack = new Stack();


            while (true)
            {
                Console.WriteLine("1.Push the data into Stack");
                Console.WriteLine("2.Pop the data from Stack");
                Console.WriteLine("3.Display the stack");

                Console.WriteLine("Enter Choice");
                int ch = Convert.ToInt32(Console.ReadLine());

                switch (ch)
                {
                    case 1:
                        {
                            Console.WriteLine("enter no of person:");
                            int num = Convert.ToInt32(Console.ReadLine());
                            while (count < num)
                            {
                                Console.WriteLine("enter data");
                                int data = Convert.ToInt32(Console.ReadLine());
                                mystack.Push(data);
                                count++;
                            }
                        }
                        break;

                    case 2:
                        {
                            if (mystack.Count <= 0)
                            {
                                Console.WriteLine("stack size is less than 0");
                            }
                            else
                            {
                                mystack.Pop();
                            }
                        }
                        break;
                    case 3:
                        {
                            foreach (var item in mystack)
                            {
                                Console.WriteLine($"items are {item}");
                            }
                        }
                        break;
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person.age();
        }
    }
}
