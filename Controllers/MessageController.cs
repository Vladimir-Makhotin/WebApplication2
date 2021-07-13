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
    public class MessageController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MessageController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select MessageId, MessageContent, ThemeName, UserName from dbo.[Message], dbo.[User], dbo.[Theme] where rf_UserId=UserId and rf_ThemeId=ThemeId";
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

        [HttpPost("userid/{UserId}/themeid/{ThemeId}")]
        public JsonResult Post(Message message, int UserId, int ThemeId)
        {
            string query = @"insert into dbo.[Message] (MessageContent, rf_UserId, rf_ThemeId) values ('" + message.MessageContent + @"', '" + UserId + @"', '" + ThemeId + @"' )";
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

        [HttpPut("userid/{UserId}/themeid/{ThemeId}")]
        public JsonResult Put(Message message, int UserId, int ThemeId)
        {
            string query = @"update dbo.[Message] set MessageContent='" + message.MessageContent + @"', rf_UserId='" + UserId + @"', rf_ThemeId='" + ThemeId + @"'  where MessageId=" + message.MessageId + @"";
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
            string query = @"delete from dbo.[Message] where MessageId=" + id + @"";
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
