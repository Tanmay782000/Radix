using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebApplication1.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> emps = new List<Employee>
         {
                new Employee
                {
                    id = 1,
                    name = "Tanmay"
                },
                new Employee
                {
                id = 2,
                name = "Vishwa"
                },
                new Employee
                {
                id = 3,
                name = "virdas"
                }
         };
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
        {
            return Ok(emps);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetbyId(int id)
        {
            var obj = emps.Find(e => e.id == id);
            return Ok(obj);
        }


        [HttpPost]
        public async Task<ActionResult<List<Employee>>> Addemp(Employee employee)
        {
            emps.Add(employee);
            return Ok(emps);
        }

        [HttpPut]
        public async Task<ActionResult<List<Employee>>> EditEmp(Employee req)
        {
            var obj = emps.Find(e => e.id == req.id);
            obj.id = req.id;
            obj.name = req.name;
            emps.Add(obj);
            return Ok(emps);
        }
        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Employee>>> DeleteEmp(int id)
        {
            var obj = emps.Find(e => e.id == id);
            emps.Remove(obj);
            return Ok(emps);
        }
    }
}
