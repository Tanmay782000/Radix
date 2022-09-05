import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Phone_Data, Location, Ride, Payment, VehicleDetails } from './Class/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private headers: HttpHeaders

  // private OTP__URL: string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/GetOtp';
  // private Insert_Phone: string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/Insert_PhoneNo';
  // private LocationList:string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/GetLocation';
  // private CalculateDistance:string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/FindDistance'
  // private Price: string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/GetAmount';
  // private ConfirmRide : string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/ConfirmRide';
  // private PaymentDetails:string = 'http://uber-2407-tanmay-api.radixind.in/api/Customer/PostPaymentDetails';
  // private GetThePhoneId:string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/StatusResponse";

  private OTP__URL: string = 'https://localhost:44327/api/Customer/GetOtp';
  private Insert_Phone: string = 'https://localhost:44327/api/Customer/Insert_PhoneNo';
  private LocationList:string = 'https://localhost:44327/api/Customer/GetLocation';
  private CalculateDistance:string = 'https://localhost:44327/api/Customer/FindDistance'
  private Price: string = 'https://localhost:44327/api/Customer/GetAmount';
  private ConfirmRide : string = 'https://localhost:44327/api/Customer/ConfirmRide';
  private PaymentDetails:string = 'https://localhost:44327/api/Customer/PostPaymentDetails';
  private GetThePhoneId:string = "https://localhost:44327/api/Driver/StatusResponse";


  location:Location[]=[];
  Ride:Ride = new Ride();
  Payment: Payment = new Payment();
  VehicleDetails:VehicleDetails = new VehicleDetails();

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }
  
   public GetOtp()
   {
     return this.http.get(this.OTP__URL,{headers:this.headers});
   }

   public PostNumber(phone_Data:Phone_Data):Observable<Phone_Data>{  
    return this.http.post<Phone_Data>(this.Insert_Phone,phone_Data);  
  }  

   public GetLocation():Observable<Location[]>
   {
    return this.http.get<Location[]>(this.LocationList)
   }

   public GetCalculation(id1:any,id2:any)
   {
     console.log(id1);
     console.log(id2);
     const obj = {id1: id1, id2: id2};
    return this.http.get(this.CalculateDistance,{params : obj});
   }
   
   public GetPrice(Dist:any,vehicleID:any)
   {
    const obj = {Dist:Dist,vehicleID:vehicleID}
    return this.http.get(this.Price,{params:obj});
   }
   
   public Confirm(ride:Ride):Observable<Ride>
   {
     return this.http.post<Ride>(this.ConfirmRide,ride)
   }

   public PaymentDetail(payment:Payment):Observable<Payment>
   {
     return this.http.post<Payment>(this.PaymentDetails,payment);
   }

  public GetThePhone(phoneid:any)
  {
    const obj = {phoneid : phoneid};
    return this.http.get(this.GetThePhoneId,{params:obj});
  }
}
