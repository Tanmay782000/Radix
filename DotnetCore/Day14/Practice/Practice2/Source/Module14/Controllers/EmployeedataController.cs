using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Module14.Models;
using Microsoft.AspNetCore.Authorization;

namespace Module14.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeedataController : ControllerBase
    {
        public static List<Employee> obj = new List<Employee>()
        {
            new Employee
            {
                id = 1,
                name = "tanmay"
            },
            new Employee
            {
                id = 2,
                name = "aum"
            },
        };

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
            {
            return Ok(obj);
            }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Employee>>> GetId(int id)
        {
            var getobj = obj.Find(e => e.id == id);
            return Ok(getobj);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Employee>>> Post(Employee employee)
        {
            obj.Add(employee);
            return Ok(obj);
        }

        [HttpPut]
        public async Task<ActionResult<List<Employee>>> UpdataData(Employee employee)
        {
            var data = obj.Find(e => e.id == employee.id);
            data.id = employee.id;
            data.name = employee.name;
            return Ok(obj);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Employee>>> DeleteData(int id)
        {
            var data = obj.Find(e => e.id == id);
            obj.Remove(data);
            return Ok(obj);
        }
    }
}
