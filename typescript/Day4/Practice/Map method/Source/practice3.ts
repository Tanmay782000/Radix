//contains key&value pair
var mp = new Map()
mp.set(1,"tanmay").set(2,"vishwa").set(3,"jhon")
console.log(mp)


//iterate over key
for(var key of mp.keys()){
    console.log("keys are:"+key)
}

//iterate over values
for(var value of mp.values()){
    console.log("keys are:"+value)
}

for(var entry of mp.entries()){
    console.log("keys are:"+entry)
}