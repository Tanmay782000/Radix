using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using Microsoft.EntityFrameworkCore;
using Uber.Models;


namespace Uber.CustomerServices
{
    public interface ICustomer : IRPattern<Customer>
    {
        public dynamic OTP_Generation();
        public dynamic PostMobile(PhoneNo phoneNo);

        public dynamic CalDistance(int id1, int id2);

        public dynamic GetLocation();

        public dynamic GetMobileDetails(PhoneNo phn);

        public dynamic GetAmount(int Dist, int vehicleID);

        public dynamic GetObjDetails();
        public dynamic GetPhones();

        //CONFIRM
        public dynamic GetConfim();
        public dynamic ConfirmRide(BookingRequest bts);
        public dynamic PaymentDetails(Payment payment);
        public dynamic GetPaymentDetails();
    }

    public class Ccustomer : RPattern<Customer>, ICustomer
    {

        private IConfiguration _config;
        uber2407tanmayContext _uberContext { get; set; }
        public Ccustomer(uber2407tanmayContext uberContext, IConfiguration config) : base(uberContext)
        {
            _config = config;
            _uberContext = uberContext;
        }

        private string GenerateJSONWebToken(PhoneNo phn)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private dynamic AuthenticateUser(PhoneNo phn)
        {
            PhoneNo user = null;

            var list = _uberContext.PhoneNos.ToList();

            PhoneNo availableuser = list.Where(x => x.MobileNo == phn.MobileNo).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
        }

        public dynamic OTP_Generation()
        {
            Random rd = new Random();
            int rand_num = rd.Next(100, 200);

            var accountSid = "AC276570a892fb39e3de03141491857225";
            var authToken = "32dccf187989e93802a5f50942f94c2f";
            TwilioClient.Init(accountSid, authToken);

            var messageOptions = new CreateMessageOptions(
               new PhoneNumber("+917284840660"));
            messageOptions.MessagingServiceSid = "MG3b1a1e803db0abb192b13010b5d81710";
            messageOptions.Body = $"Your OTP is:{rand_num}";

            var message = MessageResource.Create(messageOptions);
            Console.WriteLine(message.Body);
            return $"{rand_num}";
        }


        public dynamic PostMobile(PhoneNo phn)
        {
            var res = _uberContext.PhoneNos.Where(p => p.MobileNo == phn.MobileNo).Select(p => p).FirstOrDefault();

            if (res == null)
            {
                _uberContext.PhoneNos.Add(phn);
                _uberContext.SaveChanges();

                var user = AuthenticateUser(phn);

                if (user != null)
                {
                    var tokenString = GenerateJSONWebToken(user);
                    return new { phn.PhoneId, token = tokenString };
                }
                else
                {
                    return $"Error";
                }
                //return phn;
            }
            else
            {
                var obj = _uberContext.PhoneNos.ToList();
                var final = obj.Find(e => e.MobileNo == phn.MobileNo);

                var user = AuthenticateUser(phn);

                if (user != null)
                {
                    var tokenString = GenerateJSONWebToken(user);
                    return new { final.PhoneId, token = tokenString };
                }
                else
                {
                    return $"Error";
                }
            }
        }

        public dynamic CalDistance(int id1, int id2)
        {
            if (id1 == id2)
            {
                return new { status = "Please Enter Different Locations" };
            }
            else
            {
                var obj = _uberContext.LocationDetails.ToList();
                var res1 = obj.Find(e => e.LocationDetails == id1);
                var res2 = obj.Find(e => e.LocationDetails == id2);

                double rlat1 = Math.PI * Convert.ToDouble(res1.Latitude) / 180;
                double rlat2 = Math.PI * Convert.ToDouble(res2.Latitude) / 180;
                double theta = Convert.ToDouble(res1.Longitude) - Convert.ToDouble(res1.Longitude);
                double rtheta = Math.PI * theta / 180;
                double dist =
                Math.Sin(rlat1) * Math.Sin(rlat2) + Math.Cos(rlat1) *
                Math.Cos(rlat2) * Math.Cos(rtheta);
                dist = Math.Acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                var res = dist * 1.6 / 1;
                var Fres = Math.Round(res);
                return Fres;
            }
        }

        public dynamic GetMobileDetails(PhoneNo phn)
        {
            dynamic num = _uberContext.PhoneNos.Where(e => e.MobileNo == phn.MobileNo).FirstOrDefault();
            return num;
        }

        public dynamic GetLocation()
        {
            dynamic obj = _uberContext.LocationDetails.ToList();
            return obj;
        }

        public dynamic GetAmount(int Dist, int vehicleID)
        {
            if (vehicleID == 7)
            {
                var obj = Dist * 8 / 1;
                return obj;
            }
            else if (vehicleID == 9)
            {
                var obj = Dist * 25 / 1;
                return obj;
            }
            else if (vehicleID == 8)
            {
                var obj = Dist * 18 / 1;
                return obj;
            }
            else if (vehicleID == 10)
            {
                var obj = Dist * 35 / 1;
                return obj;
            }
            else
            {
                return $"invalid choice";
            }
        }

        public dynamic GetObjDetails()
        {
            throw new NotImplementedException();
        }

        public dynamic ConfirmRide(BookingRequest bts)
        {
            var obj = _uberContext.BookingRequests.ToList();
            _uberContext.BookingRequests.Add(bts);
            _uberContext.SaveChanges();
            return bts;
        }

        public dynamic GetConfim()
        {
            var obj = _uberContext.BookingRequests.ToList();
            return obj;
        }

        public dynamic PaymentDetails(Payment payment)
        {
            var obj = _uberContext.Payments.Add(payment);
            _uberContext.SaveChanges();
            return obj;
        }

        public dynamic GetPaymentDetails()
        {
            return _uberContext.Payments.ToList();
        }

        public dynamic GetPhones()
        {
            return _uberContext.PhoneNos.ToList();
        }
    }
}
