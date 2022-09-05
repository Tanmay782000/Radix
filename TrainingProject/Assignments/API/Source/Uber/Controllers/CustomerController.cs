using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uber.CustomerServices;
using Uber.Models;


namespace Uber.Controllers.Customerr

{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public ICustomer _icustomer { get; set; }
        public CustomerController(ICustomer icustomer)
        {
            _icustomer = 
                icustomer;
        }

        [HttpPost("Insert_PhoneNo")]

        public IActionResult PostMobileNo(PhoneNo phoneNo)
        {
            return Ok(_icustomer.PostMobile(phoneNo));
        }


        [HttpGet("GetOtp")]
        public IActionResult GetOtp()
        {
            return Ok(_icustomer.OTP_Generation());
        }


        [HttpGet("GetLocation")]

        public IActionResult GetLocation()
        {
            return Ok(_icustomer.GetLocation());
        }


        [HttpGet("FindDistance")]
        public IActionResult GetDistance(int id1, int id2)
        {
            return Ok(_icustomer.CalDistance(id1, id2));
        }


        public IActionResult GetAmount(int Dist, int vehicleID)
        {
            return Ok(_icustomer.GetAmount(Dist, vehicleID));
        }

        [HttpPost("PostCustomer")]
        public IActionResult PostCustomer(Customer customer)
        {
            return Ok(_icustomer.Post(customer));
        }

        [HttpGet("GetCustomers")]
        public IActionResult GetCustomer()
        {
            return Ok(_icustomer.Get());
        }

        [HttpGet("GetObjDetails")]
        public IActionResult GetObjDetail()
        {
            return Ok(_icustomer.GetObjDetails());
        }

        [HttpGet("GetAmount")]
        public IActionResult GetAmt(int Dist, int vehicleID)
        {
            return Ok(_icustomer.GetAmount(Dist,vehicleID));
        }

        [HttpPost("CustomerForm")]
        public IActionResult Postp(Customer customer)

        {
            return Ok(_icustomer.Post(customer));
        }


        [HttpPost("ConfirmRide")]
        public IActionResult ConfirmRequest(BookingRequest bts)
        {
            return Ok(_icustomer.ConfirmRide(bts));
        }

        [HttpGet("GetConfirm")]

        public IActionResult GetConfim()
        {
            return Ok(_icustomer.GetConfim());
        }

        [HttpPost("PostPaymentDetails")]

        public IActionResult Payment(Payment payment)
        {
            return Ok(_icustomer.PaymentDetails(payment));
        }

        [HttpGet("GetPaymentDetails")]

        public IActionResult getpayment()
        {
            return Ok(_icustomer.GetPaymentDetails());
        }

        [HttpGet("GetCustomerData")]
        public IActionResult Get()
        {
            return Ok(_icustomer.Get());
        }

        [HttpGet("getphoneno")]
        public IActionResult Getres()
        {
            return Ok(_icustomer.GetPhones());
        }



    }
}
