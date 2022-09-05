const a = {
    name:"tanmay",
    address:"35-parvati nagar soc",
    designation:"software engineer",
    info : function()
    {
        return this.name + "<br>" + this.address + "<br>" + this.designation
    }
}
document.getElementById("demo").innerHTML = a.info()