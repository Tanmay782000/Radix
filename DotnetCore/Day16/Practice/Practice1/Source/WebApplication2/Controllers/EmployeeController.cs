using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class EmployeeController : ControllerBase
    {
        private JSON_AuthContext _jSON_AuthContext;

        public EmployeeController(JSON_AuthContext jSON_AuthContext)
        {
            _jSON_AuthContext = jSON_AuthContext;
        }


        [Authorize(Roles = "Admin")]
        [HttpGet("GetData")]


        public IActionResult Getdata()
        {
            return Ok(_jSON_AuthContext.UserModels.ToList());
        }


        [Authorize(Roles = "User")]
        [HttpGet("GetId/{id}")]
        public IActionResult GetById(int id)
        {
            dynamic cd = null;
            var obj = _jSON_AuthContext.UserModels.ToList();
            dynamic res = obj.Find(e => e.Id == id);
            if(res != null)
            {
                return Ok(res);
            }

            return cd;
        }

        [HttpGet("Current")]

        public ActionResult<string> LoggedInInfo()
        {
            var userId = User.FindFirstValue(ClaimTypes.Role);


            return userId;
        }


    }
}
