using Module15.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Repository
{
    public interface IEmployee
    {
        Task<List<Customer>> GetCustomer();
        Task<int> PostCustomer(Customer cust);
     }
}
