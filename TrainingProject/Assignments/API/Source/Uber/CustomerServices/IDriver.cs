using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uber.Models;

namespace Uber.CustomerServices
{
    public interface IDriver : IRPattern<Driver>
    {
        public dynamic PostDriver(Driver driver);
        public dynamic GetDriver(string username, string password);
        public dynamic GetVehicleDetails();
        public dynamic PostVehicleDetails(VehicleDetail vehicleDetail);
        public dynamic GetLocations();
        public dynamic GetVehicleTypes();
        public dynamic GetAllDriversData(string password,string username);
        public dynamic ShowRequests(int id, string name); 
        public dynamic CancelRequest(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID);
        public dynamic SendRequestToCustomer(int id);
        public dynamic ConfirmRequest(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID);
        public dynamic PinConfirmation(int id, long pin);
        public dynamic StatusResponse(int phoneid);
        public dynamic DriverHistory(int id);
    }

    public class CDriver : RPattern<Driver>, IDriver
    {
        public uber2407tanmayContext _uber2407TanmayContext { get; set; }
        public CDriver(uber2407tanmayContext uber2407TanmayContext) : base(uber2407TanmayContext)
        {
            _uber2407TanmayContext = uber2407TanmayContext;
        }

        public dynamic GetDriver(string username, string password)
        {
            var obj = Get();
            var res = obj.Any(e => e.FirstName == username || e.Password == password);
            if (res)
            {
                return new { status = "Ok" };
            }
            else
            {
                return new { status = "NotFound" };
            }

        }

        public dynamic PostDriver(Driver driver)
        {

            var obj = Get();
            var res = obj.Find(e => e.Email == driver.Email || e.PhoneNo == driver.PhoneNo);
            if (res != null)
            {
                return new { error = "data allready exists" };
            }
            else
            {
                return Post(driver);
            }
        }



        public dynamic GetVehicleDetails()
        {
            var obj = _uber2407TanmayContext.VehicleDetails.ToList();
            return obj;
        }
        public dynamic PostVehicleDetails(VehicleDetail vehicleDetail)
        {
            _uber2407TanmayContext.Add(vehicleDetail);
            _uber2407TanmayContext.SaveChanges();
            return vehicleDetail;
        }

        public dynamic GetVehicleTypes()
        {
            var result = from e in _uber2407TanmayContext.ObjectTypes
                         join
                         d in _uber2407TanmayContext.ObjectDetails on
                         e.ObjTypeId equals d.ObjectTypeId
                         select new
                         {
                             parent_id = d.ObjectTypeId,
                             ID = d.ObjectDetailsId,
                             VehicleName = d.ObjName
                         };
            var obj = result.Where(e => e.parent_id == 4);

            return obj;
        }


        public dynamic GetLocations()
        {
            throw new NotImplementedException();
        }

        public dynamic GetAllDriversData(string password,string username)
        {
            var res = from first in _uber2407TanmayContext.Drivers
                      join
                      second in _uber2407TanmayContext.VehicleDetails on
                      first.DriverId equals second.DriverId
                      where first.Password == password
                      select new
                      {
                          id = first.DriverId,
                          Fname = first.FirstName,
                          Lname = first.LastName,
                          Email = first.Email,
                          Password = first.Password,
                          PhoneId = first.PhoneNo,
                          Address = first.Address,
                          //
                          VehicleType = second.VehicleType,
                          VehicleId = second.VehicleId
                      };
            var res2 = res.Any(e => e.Password == password && e.Fname == username);

            if (res2)
            {
                return res;
            }
            else
            {
                return new { status = "Data dosen't match in the database" };
            }
        }
        public dynamic ShowRequests(int id, string name)
        {
            var obj = _uber2407TanmayContext.CustomDTOs.FromSqlRaw($"exec GetEmployees {id},{name}");
            return obj;
        }


        public dynamic StatusResponse(int phoneid)
        {
            var obj = (from d in _uber2407TanmayContext.BookingRequests
                      where d.PhoneId == phoneid
                      orderby d.BookingId descending
                      select d).Take(1);
            var list = obj.ToList();
            return list;
        }

        public dynamic CancelRequest(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID)
        {
            (from p in _uber2407TanmayContext.BookingRequests
             where p.BookingId == BookingID
             select p).ToList().ForEach(x => x.StatusId = 13);

            _uber2407TanmayContext.SaveChanges();

            using (uber2407tanmayContext objDataContext = new uber2407tanmayContext())
            {
                var date = DateTime.Now;
                BookedService objEmp = new BookedService();
                // fields to be insert
                objEmp.BookingId = BookingID;
                objEmp.PhoneId = PhoneID;
                objEmp.VehicleDetailsId = VehicleID;
                objEmp.DriverId = DriverID;
                objEmp.PatmentId = PaymentID;
                objEmp.StatusId = 13;
                objEmp.CreateDate = date;
                objEmp.ModifiedDate = date;
                objDataContext.BookedServices.Add(objEmp);
                // executes the commands to implement the changes to the database
                objDataContext.SaveChanges();
            }
            return new { status = $"{BookingID} id request is canceled" };
        }


        public dynamic ConfirmRequest(int BookingID, int PhoneID, int VehicleID, int PaymentID, int DriverID)
        {
            (from p in _uber2407TanmayContext.BookingRequests
             where p.BookingId == BookingID
             select p).ToList().ForEach(x => x.StatusId = 17);



            _uber2407TanmayContext.SaveChanges();

            using (uber2407tanmayContext objDataContext = new uber2407tanmayContext())
            {

                Random rnd = new Random();

                var date = DateTime.Now;
                BookedService objEmp = new BookedService();
                // fields to be insert
                objEmp.BookingId = BookingID;
                objEmp.PhoneId = PhoneID;
                objEmp.VehicleDetailsId = VehicleID;
                objEmp.DriverId = DriverID;
                objEmp.PatmentId = PaymentID;
                objEmp.CreateDate = date;
                objEmp.StatusId = 17;
                objEmp.ModifiedDate = date;
                objDataContext.BookedServices.Add(objEmp);
                // executes the commands to implement the changes to the database
                objDataContext.SaveChanges();



                //add into temppin table

                RidePin ridePin = new RidePin();

                ridePin.BooingId = BookingID;
                ridePin.Pin = rnd.Next(100, 200);

                objDataContext.RidePins.Add(ridePin);
                objDataContext.SaveChanges();
                //ridePin.


            }
            return new { status = $"{BookingID} id request is confirmed" };
        }



        public dynamic SendRequestToCustomer(int id)
        {
            var obj = (from t in _uber2407TanmayContext.BookingRequests
                       where t.BookingId == id
                       select t).Take(1);

            var obj2 = (from t in _uber2407TanmayContext.BookedServices
                        where t.BookingId == id
                        select t).Take(1);

            //select TOP 1 * from BOOKING_REQUEST order by BOOKING_ID desc

            var result1 = obj.ToList();
            var result2 = obj2.ToList();



            var myd = from i in result1
                      join d in result2
                      on i.BookingId equals d.BookingId
                      join c in _uber2407TanmayContext.Drivers
                      on d.DriverId equals c.DriverId
                      join v in _uber2407TanmayContext.VehicleDetails
                      on c.DriverId equals v.DriverId
                      join py in _uber2407TanmayContext.Payments
                      on d.PatmentId equals py.PaymentId
                      join
                      z in _uber2407TanmayContext.RidePins
                      on i.BookingId equals z.BooingId

                      select new
                      {
                          BookinId = i.BookingId,
                          Payment = d.PatmentId,
                          PhoneId = d.PhoneId,
                          ServiceId = d.BookedService1,
                          statusid = d.StatusId,
                          Bookingid2 = d.BookingId,
                          //
                          DriverName = c.FirstName,
                          Distance = i.Distance,
                          vehicleName = v.VehicleName,
                          vehicleLicence = v.License,
                          Profile = c.ProfilePhoto,
                          Amount = py.Amount,
                          SecratePin = z.Pin
                      };

            var myd2 = from i in result1
                       join d in result2
                       on i.BookingId equals d.BookingId
                       join c in _uber2407TanmayContext.Drivers
                       on d.DriverId equals c.DriverId
                       join v in _uber2407TanmayContext.VehicleDetails
                       on c.DriverId equals v.DriverId
                       join py in _uber2407TanmayContext.Payments
                       on d.PatmentId equals py.PaymentId
                       select new
                       {
                           BookinId = i.BookingId,
                           Payment = d.PatmentId,
                           PhoneId = d.PhoneId,
                           ServiceId = d.BookedService1,
                           statusid = d.StatusId,
                           Bookingid2 = d.BookingId,
                           //
                           DriverName = c.FirstName,
                           Distance = i.Distance,
                           vehicleName = v.VehicleName,
                           vehicleLicence = v.License,
                           Profile = c.ProfilePhoto,
                           Amount = py.Amount,
                       };

            var ard = myd.ToList();
            var ard2 = myd2.ToList();


            var mds = ard.Any(e => e.BookinId == e.Bookingid2);
            var mds2 = ard2.Any(e => e.BookinId == e.Bookingid2);




            if (mds || mds2)
            {
                if (ard2.Any(e => e.statusid == 13))
                {
                    return new { cancel = "Oops! Sorry for Your Inconvineance Your Request is Canceled by Your near by Drivers" };
                }
                else if (ard.Any(e => e.statusid == 17))
                {
                    return myd;
                }
                else if (ard.Any(e=>e.statusid == 16))

                {
                    return new { success = "Great,Hope you had a best ride!" };
                }
                return "";
            }
            else
            {
                return new { status = "Searching For Your Driver Wait For While..." };
            }
        }


        public dynamic PinConfirmation(int id, long pin)
        {
            var obj = _uber2407TanmayContext.RidePins.ToList();
            var res = obj.Find(e => e.BooingId == id && e.Pin == pin);
            if (res != null)
            {
                          (from p in _uber2407TanmayContext.BookingRequests
                           where p.BookingId == id
                           select p).ToList().ForEach(x => x.StatusId = 16);

                           _uber2407TanmayContext.SaveChanges();

                           (from p in _uber2407TanmayContext.BookedServices
                           where p.BookingId == id
                           select p).ToList().ForEach(x => x.StatusId = 16);

                           _uber2407TanmayContext.SaveChanges();

                return new { success = "success" };
            }
            else
            {
                return new { PinNotMatched = "Pin not matched" };
            }
        }

        public dynamic DriverHistory(int id)
        {
            var obj = _uber2407TanmayContext.DriverHistoryDTOs.FromSqlRaw($"exec MyProcedure {id}");
            return obj;
        }
    }
}
