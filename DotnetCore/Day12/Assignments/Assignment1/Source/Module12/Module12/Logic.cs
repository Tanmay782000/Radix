using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace Module12.Models
{
    class Logic
    {
        Models.ToyCompanyContext TCobj = new Models.ToyCompanyContext();

        public void AddCustomer()
        {
            try
            {
                Console.WriteLine("Enter the Id");
                int ID = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Name");
                string name = Console.ReadLine();

                Console.WriteLine("Enter Email");
                string email = Console.ReadLine();

                Console.WriteLine("Enter Address");
                string address = Console.ReadLine();

                Console.WriteLine("Enter Phone");
                long phone = Convert.ToInt64(Console.ReadLine());

                Customer cs = new Customer()
                {
                    CustomerId = ID,
                    CustName = name,
                    CustEmail = email,
                    CustAddress = address,
                    CustPhone = phone,
                };
                TCobj.Add(cs);
                int res = TCobj.SaveChanges();
                if (res == 1)
                {
                    Console.WriteLine("Data Successfully Added Into Database");
                }
                else
                {
                    Console.WriteLine("data not added");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }




        public void UpdateCustomer()
        {
            try
            {
                Console.WriteLine("Enter the id you want to update");
                int find = Convert.ToInt32(Console.ReadLine());

                var ListData = TCobj.Customers.ToList();
                var FindData = ListData.Find(e => e.CustomerId == find);

                if (find == FindData.CustomerId)
                {

                    Console.WriteLine("Enter the Id");
                    int ID = Convert.ToInt32(Console.ReadLine());

                    Console.WriteLine("Enter Name");
                    string name = Console.ReadLine();

                    Console.WriteLine("Enter Email");
                    string email = Console.ReadLine();

                    Console.WriteLine("Enter Address");
                    string address = Console.ReadLine();

                    Console.WriteLine("Enter Phone");
                    long phone = Convert.ToInt64(Console.ReadLine());

                    FindData.CustomerId = ID;
                    FindData.CustName = name;
                    FindData.CustEmail = email;
                    FindData.CustAddress = address;
                    FindData.CustPhone = phone;

                    TCobj.Update(FindData);
                    int check = TCobj.SaveChanges();
                    if (check == 1)
                    {
                        Console.WriteLine("Data Stored Into Database");
                    }
                    else
                    {
                        Console.WriteLine("Data not stored");
                    }
                }
                else
                {
                    Console.WriteLine("Customer Id does not exists");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }


        public void ShowData()
        {
            Console.WriteLine("Enter the id you want to Show");
            int find = Convert.ToInt32(Console.ReadLine());

            var ListData = TCobj.Customers.ToList();
            var FindData = ListData.Find(e => e.CustomerId == find);

            if (FindData != null)
            {
                Console.WriteLine($"Id: {FindData.CustomerId} \t Name:{FindData.CustName} \t Email:{FindData.CustEmail} \t Address:{FindData.CustAddress} \t Phone No:{FindData.CustPhone}");
            }
            else
            {
                Console.WriteLine("Id is not present in database");
            }
        }

        public void DeleteData()
        {
            Console.WriteLine("Enter the id you want to Show");
            int find = Convert.ToInt32(Console.ReadLine());

            var ListData = TCobj.Customers.ToList();
            var FindData = ListData.Find(e => e.CustomerId == find);

            if (FindData != null)
            {
                TCobj.Remove(FindData);
                TCobj.SaveChanges();
            }
        }

        public void ShowOrders()
        {
            Console.WriteLine("Show orders");
        }

        public void PlaceOrder()
        {
            int count = 0;

            Console.WriteLine("Enter the total items you want to buy");
            int chs = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the customer Id");
            int Cus_Id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Address of delivery");
            string Cus_address = Console.ReadLine();

            DateTime now = DateTime.Now;
            List<OrderDetailModel> orderDetailModels = new List<OrderDetailModel>();

            long Price = 0;
            while (count < chs)
            {
                

                OrderModel om = new OrderModel();

       
                Console.WriteLine("Enter ToyId ");
                int Toy_id = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Price");
                Price = Convert.ToInt64(Console.ReadLine());

              

                OrderDetailModel orderDetailModels1 = new OrderDetailModel()
                {
                    ToyId = Toy_id,
                    Price = Price,
                };
                orderDetailModels.Add(orderDetailModels1);

          
                count++;
            }
            Order plc = new Order()
            {
                CustomerId = Cus_Id,
                AddressOfDelivery = Cus_address,
                OrderDate = now,
                OrderStatus = 0,
                TotalAmount = 10 * Price / 100,
            };

            TCobj.Add(plc);
            TCobj.SaveChanges();
            foreach(var item in orderDetailModels)
            {
                PlacedOrder oc = new PlacedOrder()
                {
                    OrderId = plc.OrderId,
                    ToyId = item.ToyId,
                    Price = item.Price,
                };
                TCobj.Add(oc);
            }      

                TCobj.SaveChanges();
        }


        public void ShowOrderDetails()
        {
            Console.WriteLine("Enter the id you want to get information");
            int id = Convert.ToInt32(Console.ReadLine());

                var SPdata = TCobj.SP.FromSqlRaw($"exec GetDetails {id}");

                foreach (var item in SPdata)
                {
                    Console.WriteLine($"CustomerID:{item.CustomerID} \t Customer Name:{item.CustName} \t Order ID;{item.OrderID} \t Department Name:{item.DeptName} \t Address Of Delivery:{item.AddressOfDelivery} \t OrderPlaced ID:{item.Order_placed_Id} \t Toy Id:{item.toyID} \t Gaurrenty:{item.Guarantee} \t warrenty:{item.warrenty} \t Price:{item.Price}");
                }
            }
        }
    }

