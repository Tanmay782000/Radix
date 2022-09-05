using System;

namespace Module2
{
  public abstract class bank
    {
      public abstract void getname(string name);
      public abstract void getsalary(int num1);


    }

  public class Saving : bank
    {
        public override void getname(string name)
        {
            Console.WriteLine("Name:"+name);
        }
        public override void getsalary(int num1)
        {
         
            Console.WriteLine("Salary:"+num1);
        }     
  }

    class Program
    {
        static void Main(string[] args)
        {
            var obj = new Saving();
            Console.WriteLine("Enter Name:");
            var var1 = Console.ReadLine();
            Console.WriteLine("Enter RollNo:");
            var var2 = Console.ReadLine();
            Console.WriteLine("Result:");
            var var3 = 5 * Convert.ToInt32(var2) / 100;
            obj.getname(var1);
            obj.getsalary(Convert.ToInt32(var2));
            Console.Write("PF:"+var3);
        }
    }
}
