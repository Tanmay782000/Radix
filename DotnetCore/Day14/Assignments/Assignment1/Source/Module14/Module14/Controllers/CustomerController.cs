using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module14.Logic;
using Module14.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module14.Controllers
{
    [Route("api/[controller]")]


    public class CustomerController : ControllerBase
    {
        private readonly Cust cust;

        public CustomerController()
        {
            cust = new Cust();
        }
        [HttpGet]

        public async Task<ActionResult> GetAllData()
        {
            return Ok(await cust.GetCustomers());
        }

        [HttpGet("cd/{id}")]

        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await cust.GetCustomersById(id));
        }

        [HttpPost]
        [Route("PostCustomer")]
        public async Task<ActionResult> PostCustomer([FromBody] Customer cus)
        {
            return Ok(await cust.PostCust(cus));
        }

        [HttpPut]
        [Route("PutCustomer")]
        public async Task<ActionResult> UpdateCustomer([FromBody] Customer customer)
        {
            return Ok(await cust.UpdateCust(customer));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCustomer(int id)
        {
            return Ok(await cust.DeleteCust(id));
        }

        [HttpPost]
        [Route("PlaceOrder")]
        public async Task<ActionResult> PlaceOrder([FromBody] Order ordr)
        {
            return Ok(await cust.PlaceOrder(ordr));
        }

        [HttpGet("{id1}/GetOrdDetails/{id2}")]
        public async Task<ActionResult> GetCusDetails(int id1,int id2)
        {
            return Ok(await cust.Getdata(id1,id2));
        }

    }
}
