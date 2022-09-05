using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Module11
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("1. Show Doctor's Data");
            Console.WriteLine("2. Add The Doctor");
            Console.WriteLine("3. Update The Doctor");
            Console.WriteLine("4. Delete The Doctor");
            Console.WriteLine("----------------------------");
            Console.WriteLine("5. Add Report");
            Console.WriteLine("6. Show Report");


            while (true)
            {

                Console.WriteLine("Enter the Choice");
                int choice = Convert.ToInt32(Console.ReadLine());



                var obj = new logic();

                switch (choice)
                {
                    case 1:
                        obj.ShowDoctor();
                        break;
                    case 2:
                        obj.InsertDoctor();
                        break;
                    case 3:
                        obj.UpdateDoctor();
                        break;
                    case 4:
                        obj.DeleteDoctor();
                        break;
                    case 5:
                        obj.AddReport();
                        break;
                    case 6:
                        obj.ShowReport();
                        break;
                }

            }
        }
    }
}