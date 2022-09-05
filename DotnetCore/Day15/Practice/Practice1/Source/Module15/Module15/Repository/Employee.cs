using Microsoft.EntityFrameworkCore;
using Module15.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Repository
{
    public class Employee : IEmployee
    {
        public ToyCompanyContext _tyx { get; set; }

        public Employee(ToyCompanyContext tyx)
        {
            _tyx = tyx;
        }

        public async Task<List<Customer>> GetCustomer()
        {
            return await _tyx.Customers.ToListAsync();
        }

        public async Task<int> PostCustomer(Customer cust)
        {
            _tyx.Add(cust);
            await _tyx.SaveChangesAsync();
            return cust.CustomerId;
        }
    }
}
