using Microsoft.AspNetCore.Mvc;
using Uber.CustomerServices;
using Uber.Models;

namespace Uber.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {

        private IDriver _driver { get; set; }

        public DriverController(IDriver driver)
        {
            _driver = driver;
        }

        [HttpPost]
        public IActionResult PostForm(Driver driver)
        {
            var res = _driver.PostDriver(driver);
            return Ok(res);
        }

        [HttpGet]
        public IActionResult GetD(string username, string password)
        {
            return Ok(_driver.GetDriver(username, password));
        }

        [HttpGet("GetVehicleDetails")]
        public IActionResult GetVehicle()
        {
            return Ok(_driver.GetVehicleDetails());
        }

        [HttpPost("VehicleDetails")]
        public IActionResult PostVehicle(VehicleDetail vehicleDetail)
        {
            return Ok(_driver.PostVehicleDetails(vehicleDetail));
        }


        [HttpGet("GetVehicleTypes")]
        public IActionResult GetVehicleType()
        {
            return Ok(_driver.GetVehicleTypes());
        }

        [HttpGet("GetDriver")]
        public IActionResult GetDriver()
        {
            return Ok(_driver.Get());
        }

        [HttpGet("GetAllDriversData")]
        public IActionResult GetAllDrivers(string password,string username)
        {
            return Ok(_driver.GetAllDriversData(password, username));
        }

        [HttpGet("GetDTO")]
        public IActionResult GetDTO(int id, string name)
        {
            return Ok(_driver.ShowRequests(id, name));
        }

        [HttpGet("CancelRequest")]
        public IActionResult CancelReq(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID)
        {
            return Ok(_driver.CancelRequest(BookingID, PhoneID, VehicleID, PaymentID, DriverID));
        }

        [HttpGet("ConfirmRequest")]
        public dynamic ConfirmRequest(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID)
        {
            return Ok(_driver.ConfirmRequest(BookingID, PhoneID, VehicleID, PaymentID, DriverID));
        }

        [HttpGet("GetResponse")]
        public IActionResult SendRequestToCustomer(int id)
        {
            return Ok(_driver.SendRequestToCustomer(id));
        }

        [HttpGet("PinConfirmation")]
        public IActionResult PinConfirmations(int id,long pin)
        {
            return Ok(_driver.PinConfirmation(id, pin));
        }

        [HttpGet("StatusResponse")]
        public IActionResult StatusRespons(int phoneid)
        {
           return Ok(_driver.StatusResponse(phoneid));
        }

        [HttpGet("DriverHistory")]
        public IActionResult DriverHistorys(int id)
        {
            return Ok(_driver.DriverHistory(id));
        }
    }
}
