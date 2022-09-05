class vacancies {
    vacanyID: number;
    technology: string;
    role: string;
    vacantno: number;
    constructor(id: number, tech: string, role: string, vacant: number) {
        this.vacanyID = id;
        this.technology = tech;
        this.role = role;
        this.vacantno = vacant;
    }
    printvacancy() {
        console.log('\nvacancyID : ' + this.vacanyID + '\ntechnology : ' + this.technology + '\nrole : ' + this.role + '\nvacantno : ' + this.vacantno);
    }
}
class applicant{
    name: string;
    address: string;
    phone: number;
    technology: string;
    Itime?:string;
    marks:number;
    result:string;
    constructor(name: string, address: string, phone: number, technology: string) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.technology = technology;       
    }
    setInterview(){
        this.Itime="10:30 AM";
    }
checkStatus(){
       if(this.marks>250)
            this.result="Hired";
        else
            this.result="Not Hired";
    }
    printReport(){
        console.log(
        `
        Name : ${this.name},
        Technology : ${this.technology},
        Address = ${this.address},
        Phone = ${this.phone},
        Result = ${this.result}
        `)
    }
}
var t1 = new vacancies(1, "PHP", "Software Engineer", 2);
var t2 = new vacancies(2, "DOTNET", "Software Engineer", 4);
var t3 = new vacancies(3, "NodeJS", "Software Engineer", 6);
var d1 = new applicant("jhon", "Ahmedabad", 3424234233, "DOTNET");
var d2 = new applicant("noob", "Vadodara", 9898987789, "Django");
d1.setInterview()
console.log("Interview schedule of "+d1.name+" At "+d1.Itime);
d1.marks=400;
d1.checkStatus();
d1.printReport();