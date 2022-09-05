using System;
using System.Collections.Generic;
using System.Linq;
namespace Module5
{

    public class Rental_charges
    {
        public long rent;
        List<Mobike> lst = new List<Mobike>();
        public void input(Mobike mobike)
        {
            lst.Add(mobike);
        }
   
       public void Compute()
        {
        foreach(var item in lst)
            {
                if (item.Cdays <= 5)
                {
                    rent = item.Cdays * 100 / 1;
                    Console.WriteLine($"\n {item.Cname}'s rent of bike:{rent}");
                }
                else if(item.Cdays <= 10)
                {
                    rent = (5 * 500) + ((item.Cdays - 5) * 400);
                    Console.WriteLine($"\n {item.Cname}'s rent of bike:{rent}");
                }
                else
                {
                    rent = (5 * 500) + (5 * 400) + ((item.Cdays - 10) * 100);
                    Console.WriteLine($"\n {item.Cname}'s rent of bike:{rent} ");
                }
            }
        }

        public void display()
        {
            foreach(var item in lst)
            {
                Console.WriteLine($"\n name :{item.Cname} \n Bike Number:{item.Bike_Number} \n Phone Number:{item.Phone_Number} \n Days:{item.Cdays}");
            }
        }

        public void delete(string name)
        {

            var deleteObj = lst.Where(a => a.Cname == name).FirstOrDefault();
            if(deleteObj != null)
            {
              lst.Remove(deleteObj);
            }
        }

        public void update(string name)
        {
            var updateObj = lst.Where(a => a.Cname == name).FirstOrDefault();
            if (updateObj != null)
            {

                Console.WriteLine("enter new name");
                string Nname = Console.ReadLine();

                Console.WriteLine("enter new bike number");
                int NB_no = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("enter new phone number");
                int PH_no = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("enter days");
                int Cdays = Convert.ToInt32(Console.ReadLine());

                updateObj.Cname = Nname;
                updateObj.Bike_Number = NB_no;
                updateObj.Phone_Number = PH_no;
                updateObj.Cdays = Cdays;
            }
        }

        public void search(string name)
        {
            var searchObj = lst.Where(a => a.Cname == name).FirstOrDefault();
            if(searchObj != null)
            {
                Console.WriteLine($"\n name :{searchObj.Cname} \n Bike Number:{searchObj.Bike_Number} \n Phone Number:{searchObj.Phone_Number} \n Days:{searchObj.Cdays}");
            }
        }
    }


    public class Mobike
    {
        public string Cname { get; set; }
        public long Bike_Number { get; set; }
        public long Phone_Number { get; set; }
        public int Cdays { get; set; }

    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Rental_charges rt = new Rental_charges();

            while (true)
            {
                Console.WriteLine("-------------------------------------------------------------------");
                Console.WriteLine($"\n 1. Add the customer \n");
                Console.WriteLine($"\n 2. Remove the customer \n");
                Console.WriteLine($"\n 3. Update the customer \n");
                Console.WriteLine($"\n 4. Display the customer \n");
                Console.WriteLine($"\n 5. Search the customer \n");
                Console.WriteLine("-------------------------------------------------------------------");


                Console.WriteLine("Enter the choice");
                int ch = Convert.ToInt32(Console.ReadLine());

                switch (ch)
                {
                    case 1:
                        {
                            Console.WriteLine("Enter Name");
                            string name = Console.ReadLine();

                            Console.WriteLine("Enter Bike Number");
                            long Bike_No = Convert.ToInt32(Console.ReadLine());

                            Console.WriteLine("Enter Phone Number");
                            long Phone_no = Convert.ToInt64(Console.ReadLine());

                            Console.WriteLine("Enter Days");
                            int days = Convert.ToInt32(Console.ReadLine());

                            Mobike mobike = new Mobike()
                            {
                                Cname = name,
                                Bike_Number = Bike_No,
                                Phone_Number = Phone_no,
                                Cdays = days,
                            };
                            rt.input(mobike);
                        break;
                        }

                    case 2:
                        {
                            rt.display();
                            rt.Compute();
                            break;
                        }
                    case 3:
                        {
                            Console.WriteLine("Enter name to delete the record");
                            string name = Console.ReadLine();
                            rt.delete(name);
                            break;
                        }
                    case 4:
                        {
                            Console.WriteLine("Enter name to update");
                            string name = Console.ReadLine();
                            rt.update(name);
                            break;
                        }
                    case 5:
                        {
                            Console.WriteLine("Enter name to search");
                            string name = Console.ReadLine();
                            rt.search(name);
                            rt.Compute();
                            break;
                        }
            }
        }
        }
    }
}
