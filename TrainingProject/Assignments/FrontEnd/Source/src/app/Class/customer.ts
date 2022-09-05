export class Customer {
    public FIRST_NAME:string;
    public LAST_NAME:string;
}

export class Phone_Data{
   public mobileNo:Number;
   public createDate:Date;
   public modifiedDate:Date;
}

export class Location
{
   public locationDetails:Number;
   public locationName:String;
   public locationAddress:String;
   public pincode:Number;
   public longitude:Number;
   public latitude:Number;
   public createDate :Date;
   public modifiedDate:Date;
}

export class Ride{
   public source:Number;
   public destination:Number;
   public distance:Number;
   public statusId:Number;
   public createDate:Date;
   public modifiedDate:Date;
   public phoneId:Number;
   public vehicleId:Number; 
}

export class Payment{
   public bookingId:Number;
   public amount:Number;
   public paymentMethod:Number;
   public modifiedDate:Date;
   public createDate:Date;
}

export class Driver{
   public firstName:string;
   public lastName:string;
   public email:string;
   public password:string;
   public phoneNo:string;
   public address:string;
   public profilePhoto:string;
   public createDate:Date;
   public modifiedDate:Date;
}
// "driverId": 3,
// "vehicleType": 7,
// "license": "432",
// "rcbook": "9087867",
// "adharchad": "f897dsfghjdf",
// "createDate": "2022-08-23T00:00:00",
// "modifiedDate": "2022-08-23T00:00:00"

export class VehicleDetails{
   public driverId:number;
   public vehicleType:number;
   public license:any;
   public rcbook:any;
   public adharchad:any;
   public vehicleName:any;
   public createDate:Date;
   public modifiedDate:Date;
}