console.log("Day2 Assignment2")
class first
{
    television : number
    Aircoolers : number
    cameras : number
    refrigerator : number
    hairdryer : number
    laptops : number
}
var purchase = 2
var g = new first()
g.television = 5
g.Aircoolers = 6
g.cameras = 6
g.laptops = 20
g.hairdryer = 40
g.refrigerator = 16
var dmc = `television:${g.television-purchase} 
Air coolers:${g.Aircoolers-purchase}  
cameras:${g.cameras-purchase}  
refrigeraotr:${g.refrigerator-purchase}  
Hair dryer:${g.hairdryer-purchase}  
Laptop:${g.laptops-purchase}`
if(g.Aircoolers - purchase < 5)
{
    console.log("aircoolers are less in stock")
}
if(g.refrigerator - purchase < 5)
{
    console.log("refigrators are less in stock")
}
if(g.laptops - purchase < 5)
{
    console.log("laptops are less in stock")
} 
if(g.television - purchase < 5)
{
    console.log("televisions are less in stock")
} 
if(g.hairdryer - purchase < 5)
{
    console.log("hair dryer are less in stock")
}
if(g.cameras - purchase < 5)
{
    console.log("Cameras are less in stock")
} 

console.log(dmc)
