using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module15.Models;
using Module15.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustController : ControllerBase
    {
        private IEmployee employee { get; set; }

        public CustController(IEmployee service)
        {
            employee = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customer>>> GetAll()
        {
            return Ok(await employee.GetCustomer());
        }
        [HttpPost]
        public IActionResult PostData(Customer cus)
        {
            int cusid = employee.PostCustomer(cus).Result;
            return Ok(cusid);
        }

    }
}
