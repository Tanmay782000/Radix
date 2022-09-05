using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module15.Auth;
using Module15.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        Token token;

        public ICustomerService _repository { get; set; }
        
        public LoginController(ICustomerService repository)
        {
            _repository = repository;
            token = new Token();
        }
        
        
        
        [HttpGet("GetToken")]

        public IActionResult LoginUser([FromHeader] string id,[FromHeader]string username)
        {
            string tokenvalue = string.Empty;
            if ( !string.IsNullOrEmpty(id) && !string.IsNullOrEmpty(username))
            {
               var custRst =  _repository.GetCustomerByLinq(Convert.ToInt32(id));
                if(custRst != null)
                {
                   if( custRst.CustName == username)
                    {
                         tokenvalue = token.GenerateToken(Convert.ToInt32(id));
                    }
                }
                return Ok(tokenvalue);
            }
            else
            {
                return NotFound("Not found");
            }
        }
    }
}
