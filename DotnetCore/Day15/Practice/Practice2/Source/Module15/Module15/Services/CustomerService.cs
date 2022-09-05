using Module15.Models;
using Module15.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Services
{
    public interface ICustomerService:IRepository<Customer>
    {
        Customer GetCustomerByLinq(int id);
    }

    public class CustomerService: Repository<Customer> , ICustomerService
    {
       public CustomerService(ToyCompanyContext toyCompanyContext):base(toyCompanyContext)
        {

        }

        public Customer GetCustomerByLinq(int id)
        {
            var obj = GetData();
            var res = obj.Where(e => e.CustomerId == id);
            return res.FirstOrDefault();
        }

    }
}
