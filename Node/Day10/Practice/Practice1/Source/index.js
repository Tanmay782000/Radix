const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/practice1")

const schema = new mongoose.Schema({
    name: String,
    Er_no: Number,
    Department: String
})


const model = mongoose.model("prac1", schema)

// add the record by creating object of model
async function AddField() {
    const result = new model({
        "name": "Aum",
        "Er_no": 10,
        "department": "Computer"
    });
    const res = await result.save()
    console.log(res)
}

AddField()

// Find the records by name
async function FindField() {
    const result = await model.find({ "name": "Tanmay" })
    console.log(result)
}

FindField()


// comparision operators
async function Compare()
{
    const result = await model.find({Er_no:{$eq : 20}})
    console.log(result)
}
Compare()