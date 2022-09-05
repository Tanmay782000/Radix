using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Module15.Models;
using Module15.Repository;
using Module15.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Module15.Controllers
{
    [Route("api/[controller]")]

    [ApiController]

    public class CustomerController : ControllerBase
    {
        public ICustomerService _repository { get; set; }

        public CustomerController(ICustomerService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IActionResult GetData()
        {
            return Ok(_repository.GetData());
        }
        [HttpPost]
        [ActionFilter]
        public IActionResult PostData(Customer cus)
        {
            return Ok(_repository.PostData(cus));
        }

        [HttpPut]

        public IActionResult Updatedata(Customer cus)
        {
            return Ok(_repository.UpdateData(cus));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteData(int id)
        {
            return Ok(_repository.DeleteData(id));
        }


        [HttpGet("Specific/{id}")]
        public IActionResult GetCustomerByLinq(int id)
        {
            return Ok(_repository.GetCustomerByLinq(id));
        }

        [HttpPost("InsertFile")]
        public IActionResult Post(List<IFormFile> files)
        {
            var file = files.First();
            var fileName = string.Format("./Uploads/{0}", file.FileName);
            var fileStream = new FileStream(fileName, FileMode.Append);
            file.CopyTo(fileStream);
            fileStream.Close();
            return Ok(file.Name);
        }
        [HttpGet("GetData/{fileName}")]
        public IActionResult Get(string fileName)
        {
            var filePath = string.Format("./Uploads/{0}", fileName);
            var fileStream = new FileStream(filePath, FileMode.Open);
            var bytes = fileStream;
            return File(bytes, "text/img", fileName);
        }
    }
}
