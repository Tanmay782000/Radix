using System;

namespace Module3
{

    interface IEmp
    {
        void Get();
        void Display();
        void Salary();
    }

    public abstract class employee : IEmp
    {
        public int id;
        public string name;
        public string address;
        public int pannumber;
        public int interestrate;
        public int houres;
        public int sal;
        public int HRA;
        public int TD;
        public int DA;

        public virtual void Display()
        {
            Console.WriteLine($" \n ID: {id} \n NAME: {name} \n ADDRESS: {address} \n Pan_Number {pannumber}");
        }

        public virtual void Salary()
        {
            Console.WriteLine($"Salary is {sal}");
        }

        public virtual void Get()
        {

        }
    }

    public class Part_Time : employee
    {
        public Part_Time(int id, string name, string address, int pannumber)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.pannumber = pannumber;
        }
        public override void Display()
        {
            base.Display();
            Console.WriteLine($" \n salary : {sal}");
        }
        public override void Salary()
        {
            sal = houres * 400 / 1;
        }
    }

    public class Full_Time : employee
    {
        public Full_Time(int id, string name, string address, int pannumber)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.pannumber = pannumber;
        }

        public override void Display()
        {
            base.Display();
            Console.WriteLine($" \n HRA : {HRA}");
            Console.WriteLine($" \n TD : {TD}");
            Console.WriteLine($" \n DA : {DA}");
        }
        public override void Salary()
        {
            HRA = 4 * sal / 100;
            TD = 3 * sal / 100;
            DA = 2 * sal / 100;
        }

    }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"\n 1.Part Time \n 2.Full Time");
            Console.Write($"\n Enter choice: \n");
            string ch = Console.ReadLine();
            if (ch == "1")
            {
                Console.WriteLine("------------------------For Part Time employee------------------------");
                Part_Time pt = new Part_Time(1, "tanmay", "Vadodara", 345);
                while (true)
                {
                    Console.WriteLine("Please enter Houres");
                    pt.houres = Convert.ToInt32(Console.ReadLine());
                    pt.Salary();
                    pt.Display();
                    break;
                }
            }
            else if (ch == "2")
            {
                Console.WriteLine("------------------------For Full Time employee------------------------");
                Full_Time ft = new Full_Time(1, "tanmay", "Vadodara", 345);
                while (true)
                {
                    Console.WriteLine("Please enter salary");
                    ft.sal = Convert.ToInt32(Console.ReadLine());
                    ft.Salary();
                    ft.Display();
                    break;
                }
            }
            else
            {
                Console.WriteLine("Invalid Choice");
            }

        }
    }
}
