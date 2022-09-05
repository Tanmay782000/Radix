using System;
using Microsoft.EntityFrameworkCore;

namespace Module12.Models
{
    class main
    {
       public static void Main(string[] args)
        {
            Console.WriteLine("1.Add the Customer");
            Console.WriteLine("2.Update the Customer");
            Console.WriteLine("3.Show the Customer");
            Console.WriteLine("4.Delete the Customer");

            Console.WriteLine("-----------------------------------------");

            Console.WriteLine("5.Place an order");
            Console.WriteLine("6.Show order details");

            var obj = new Logic();
            while (true)
            {
                Console.WriteLine("Enter The Choice");
                int choice = Convert.ToInt32(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        obj.AddCustomer();
                        break;

                    case 2:
                        obj.UpdateCustomer();
                        break;
                    case 3:
                        obj.ShowData();
                        break;
                    case 4:
                        obj.DeleteData();
                        break;

                    case 5:
                        obj.PlaceOrder();
                        break;

                    case 6:
                        obj.ShowOrderDetails();
                        break;
                }
            }
        }
    }
}
