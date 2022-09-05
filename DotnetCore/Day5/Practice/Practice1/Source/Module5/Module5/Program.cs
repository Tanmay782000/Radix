using System;
using System.Collections;
using System.Collections.Generic;

namespace Module5
{
    public class student
    {
        List<student_list> lst = new List<student_list>();
        public void add()
        {
            int count = 1;

            Console.WriteLine("Enter the total student:");
            int len = Convert.ToInt32(Console.ReadLine());

            while (count <= len)
            {
                Console.WriteLine("enter name");
                string name = Console.ReadLine();


                var obj = new student_list()
                {
                    name = name,
                };
                lst.Add(obj);
                count++;
            }

            Console.WriteLine("Enter the index number of student");
            int num = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= lst.Count; i++)
            {
                if (num == i)
                {
                    Console.WriteLine($"Student name is : {lst[i].name}");
                }
            }
        }
    }


    class student_list
    {
        public string name;
    }

    class Program
    {
        static void Main(string[] args)
        {
            student st = new student();
            st.add();
        }
    }
}

