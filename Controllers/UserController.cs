using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        ContextDB db = new ContextDB();
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select UserId, UserName, UserPhone, UserEmail from dbo.[User]";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("RegistrationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpGet("{id}")]
        public int Get(int id)
        {
            User user = db.Users.FirstOrDefault(u => u.UserId == id);
            return user.UserId;
        }
        [HttpPost]
        public JsonResult Post(User user)
        {
            bool check = true;
            foreach(User u in db.Users)
            {
                if (u.UserEmail == user.UserEmail && u.UserPhone == user.UserPhone)
                    check = false;
            }
            if(check==true)
            {
                string query = @"insert into dbo.[User] (UserName, UserPhone, UserEmail) values ('" + user.UserName + @"', '" + user.UserPhone + @"', '" + user.UserEmail + @"' )";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("RegistrationAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Added Succsessfully");
            }
            else
                return new JsonResult("The user is already in the table");
        }

        [HttpPut]
        public JsonResult Put(User user)
        {
            string query = @"update dbo.[User] set UserName='" + user.UserName + @"', UserPhone='" + user.UserPhone + @"', UserEmail='" + user.UserEmail + @"'  where UserId=" + user.UserId + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("RegistrationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Succsessfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.[User] where UserId=" + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("RegistrationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Succsessfully");
        }
    }
}
