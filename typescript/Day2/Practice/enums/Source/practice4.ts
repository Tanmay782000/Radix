console.log("DAY-2 PRACTICE-4")
//there are 3 types of enums 1)number ,2)string ,3)hetrogeneous
//computed enums
enum printh{
  television = 20,
  fridge = television * 2,
  oven = getresult('five')
  }
  
  function getresult(getv:string): number{
      if(getv === 'five')
      {
          return 7;
      }
  }
  console.log(printh.oven)
  console.log(printh.fridge)