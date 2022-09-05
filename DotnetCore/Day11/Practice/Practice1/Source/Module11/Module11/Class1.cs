using Module11;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Module11
{
    class Program
    {
        static void Main(string[] args)
        {
            Data d = new Data();
            List<Employee> list = d.getreport();
            foreach (var item in list)
            {
                Console.WriteLine($"{item.BusinessEntityID} {item.Title}");
            }
            Console.WriteLine("Hello World!");
        }
    }
}
