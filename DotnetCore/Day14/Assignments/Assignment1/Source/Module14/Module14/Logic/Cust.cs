using Microsoft.EntityFrameworkCore;
using Module14.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Module14.Logic
{
    public class Cust
    {
        private ToyCompanyContext toyCompanyContext { get; set; }
        public Cust()
        {
            toyCompanyContext = new ToyCompanyContext();
        }

        public async Task<List<Customer>> GetCustomers()
        {
            var employees =  await (from emp in toyCompanyContext.Customers
                                   select emp
                                  ).ToListAsync();
            return employees;
        }

        public async Task<Customer> GetCustomersById(int id)
        {
            var employees =await toyCompanyContext.Customers.ToListAsync();
            var Result = employees.Find(e => e.CustomerId == id);
            return Result;
        }

        public async Task<int> PostCust(Customer customer)
        {
            toyCompanyContext.Add(customer);
            toyCompanyContext.SaveChangesAsync();
            return customer.CustomerId;
        }

        public async Task<List<Customer>> UpdateCust(Customer customer)
        {
            var obj =await toyCompanyContext.Customers.ToListAsync();

            var res = obj.Find(e => e.CustomerId == customer.CustomerId);
            res.CustomerId = customer.CustomerId;
            res.CustName = customer.CustName;
            res.CustEmail = customer.CustEmail;
            res.CustPhone = customer.CustPhone;
            res.CustAddress = customer.CustAddress;
            toyCompanyContext.Customers.Update(res);
            toyCompanyContext.SaveChangesAsync();
            return obj;
        }

        public async Task<List<Customer>> DeleteCust(int id)
        {
            var obj = await toyCompanyContext.Customers.ToListAsync();
            var res = obj.Find(e => e.CustomerId == id);
            //obj.Remove(res);
            toyCompanyContext.Customers.Remove(res);
            toyCompanyContext.SaveChangesAsync();
            return obj;
        }

        public async Task<int> PlaceOrder(Order ord)
        {
            try
            {
                toyCompanyContext.Add(ord);

                foreach (var item in ord.PlacedOrders)
                {
                    toyCompanyContext.PlacedOrders.Add(item);
                }
                await toyCompanyContext.SaveChangesAsync();

                return (int)ord.OrderId;
            }
            catch(Exception e)
            {
                return 0;
            }
        }

        public async Task<Object> Getdata(int id1,int id2)
        {
            var obj = toyCompanyContext.SpData.FromSqlRaw("exec GetDetails {0},{1}",id1,id2);
            return obj;
        }

    }
}
