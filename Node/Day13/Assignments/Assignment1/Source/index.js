const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/HospitalManagement")
    .then(() => console.log("connected"))
    .catch(() => console.log("not connected"))

const PatientsSchema = new mongoose.Schema({
    "name": String,
    "Assigned_doctor": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor_details'
    }
})
const Patients = mongoose.model("Patients", PatientsSchema)


const DrugsSchema = new mongoose.Schema({
    "Medicine_name": String,
    "Medicine_details": {
        "Category": String,
        "Usage": String
    }
})
const Drugs = mongoose.model("Drugs", DrugsSchema)


const ReportSchema = new mongoose.Schema({
    "doctor_name": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor_details'
    },
    "Patients": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients'
    },
    "Dosage": [{
        "morning": {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drugs'
        },
        "afternoon": {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drugs'
        },
        "night": {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drugs'
        }
    }]
})
const Doctors = mongoose.model("Doctors", ReportSchema)

const Dpersonal_details = new mongoose.Schema({
    name: String,
    address: String,
    education: String,
    degree: String,
    specialization: String,
})

const DP_model = mongoose.model("Doctor_details", Dpersonal_details)

app.post("/patient/addpatient", (req, res) => {
    var result = new Patients(req.body)
    result.save()
    res.end()
})
app.post("/drugs/adddrugs", (req, res) => {
    var result = new Drugs(req.body)
    result.save()
    res.end()
})
app.post("/doctor/addreport", (req, res) => {
    var result = new Doctors(req.body)
    result.save()
    res.end()
})


//CRUD operation on doctor


//post the doctor
app.post("/doctor/adddoctor", (req, res) => {
    var result = new DP_model(req.body)
    result.save()
    res.end()
})

//get the doctor
app.get("/doctor/getdoctor/:id", async (req, res) => {
    id = req.params.id
    var result = await DP_model.findById(id)
    res.send(result)
    res.end()
})


//update the doctor
app.put("/doctor/update/:id", (req, res) => {
    DP_model.find((err, data) => {
        if (err) throw err
        else
            data.find((Ab) => {
                if (parseInt(Ab._id) === parseInt(req.params.id)) {
                    console.log(Ab._id)
                    const filter = Ab;
                    const options = req.body;
                    DP_model.updateMany(filter, options, function (err) {
                        if (err) throw err
                        console.log("data updated")
                    })
                }
            })
        res.end()
    })
})

//delete the doctor
app.put("/doctor/delete/:id", (req, res) => {
    var id = req.params.id
    var result = DP_model.findById(id)
    DP_model.deleteOne(result, (err) => {
        if (err) throw err
        else {
            console.log("deleted successfully")
        }
    })
    res.end()
})

//whole report details
app.get("/patient/report_details/:id", async (req, res) => {
    var id = req.params.id
    const var1 = await Doctors.findById(id)
    res.send(var1)
    console.log(var1)
    res.end()
})


//get medicine details
app.get("/patient/:id/MedicineDetails", async (req, res) => {
    var id = req.params.id
    const var1 = await Doctors.findById(id)
    res.send(var1.Dosage)
    res.end()
})



app.listen(1010, () => {
    console.log("server started at 1010")
})