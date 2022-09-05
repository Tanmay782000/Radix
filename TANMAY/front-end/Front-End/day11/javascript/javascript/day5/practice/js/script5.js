const p1 = {
    name: function(){
        return this.fname + " " + this.lname
    }
}
const p2 = {
    fname:"tanmay",
    lname:"mehta",
}
document.getElementById("demo").innerHTML = p1.name.apply(p2)