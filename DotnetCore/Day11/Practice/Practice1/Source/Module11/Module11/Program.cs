using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Text;
namespace Module11
{
    class Data
    {
        SqlConnection con = null;
        public Data()
        {
            string name = ConfigurationManager.ConnectionStrings["con"].ConnectionString;

            con = new SqlConnection(name);
            //{
            //   con.Open();
            //   Console.WriteLine("Connection opened");
            //   con.Close();
            // }
        }
        public List<Employee> getreport()
        {
            List<Employee> employees = new List<Employee>();
            SqlCommand sqlCommand = new SqlCommand("select BusinessEntityId,jobTitle from HumanResources.Employee",con);
            con.Open();
            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {
                employees.Add(new Employee() { BusinessEntityID = Convert.ToInt32(sqlDataReader[0].ToString()), Title = sqlDataReader[1].ToString() });
            }
            sqlDataReader.Close();
            con.Close();
            return employees;
        }
    }
    }
