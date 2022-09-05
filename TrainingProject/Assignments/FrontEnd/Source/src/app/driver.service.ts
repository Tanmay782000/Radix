import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver, VehicleDetails } from './Class/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {



  PostDriver: string = "https://localhost:44327/api/Driver";
  GetDriver: string = "https://localhost:44327/api/Driver";
  PostVehicleDetails: string = "https://localhost:44327/api/Driver/VehicleDetails";
  GetVehicle: string = "https://localhost:44327/api/Driver/GetVehicleTypes";
  GetLoggedIn: string = "https://localhost:44327/api/Driver/GetAllDriversData";
  ShowBookingRequests: string = "https://localhost:44327/api/Driver/GetDTO";
  CancelRequest: string = "https://localhost:44327/api/Driver/CancelRequest";
  ConfirmRequests:string = "https://localhost:44327/api/Driver/ConfirmRequest";
  GetResponseBy:string = "https://localhost:44327/api/Driver/GetResponse";
  PinRedirection:string = "https://localhost:44327/api/Driver/PinConfirmation";
  RideHistory:string= "https://localhost:44327/api/Driver/DriverHistory";

  // PostDriver: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver";
  // GetDriver: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver";
  // PostVehicleDetails: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/VehicleDetails";
  // GetVehicle: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/GetVehicleTypes";
  // GetLoggedIn: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/GetAllDriversData";
  // ShowBookingRequests: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/GetDTO";
  // CancelRequest: string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/CancelRequest";
  // ConfirmRequests:string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/ConfirmRequest";
  // GetResponseBy:string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/GetResponse"
  // PinRedirection:string = "http://uber-2407-tanmay-api.radixind.in/api/Driver/PinConfirmation";


  public headers: HttpHeaders
  Driver: Driver = new Driver();

  constructor(private HttpClient: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public FPostDriver(driver: Driver): Observable<Driver> {
    return this.HttpClient.post<Driver>(this.PostDriver, driver);
  }

  public FGetDriver(username: any, password: any) {
    var obj = { username: username, password: password };
    return this.HttpClient.get(this.GetDriver, { params: obj });
  }

  public PostVehicle(vehicleDetails: VehicleDetails) {
    console.log("printed");
    return this.HttpClient.post<VehicleDetails>(this.PostVehicleDetails, vehicleDetails)
  }

  public Getvehicle() {
    return this.HttpClient.get(this.GetVehicle, { headers: this.headers });
  }

  public GetLoggedInDriver(password: any) {
    var obj = { password: password }
    return this.HttpClient.get(this.GetLoggedIn, { params: obj });
  }

  public ShowBookingRequest(id: any, name: any) {
    var obj = { id: id, name: name }
    return this.HttpClient.get(this.ShowBookingRequests, { params: obj });
  }

  public CancelCRequest(bookingId:any,phoneId:any,vehicleId:any,paymentId:any,driverId:any) {
    var obj = {bookingId:bookingId,phoneId:phoneId,vehicleId:vehicleId,paymentId:paymentId,driverId:driverId}
    console.log(obj);
    return this.HttpClient.get(this.CancelRequest,{params:obj});
  }

  public ConfirmRequest(bookingId:any,phoneId:any,vehicleId:any,paymentId:any,driverId:any)
  {
    var obj = {bookingId:bookingId,phoneId:phoneId,vehicleId:vehicleId,paymentId:paymentId,driverId:driverId}
    console.log(obj);
    return this.HttpClient.get(this.ConfirmRequests,{params:obj});
  }

  public GetResponse(id:any)
  {
    var obj = {id:id}
    return this.HttpClient.get(this.GetResponseBy,{params:obj});
  }

  public PinRedirectio(id:any,pin:any)
  {
    var obj = {id:id,pin:pin}
    return this.HttpClient.get(this.PinRedirection,{params:obj});
  }

  public GetRideHistory(id:any)
  {
    var obj = {id:id}
    return this.HttpClient.get(this.RideHistory,{params:obj})
  }

}
