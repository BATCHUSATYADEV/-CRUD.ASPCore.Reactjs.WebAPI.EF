using Application_Api.Context;
using Application_Api.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurdApplication
{
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    
    public class ApplicationController : ControllerBase
    {
        private ApplicationContext App;

        public ApplicationController(ApplicationContext companyContext)
        {
            App = companyContext;
        }
        // GET: api/<ApplicationController>
        [HttpGet]
        public IEnumerable<Application> Get()
        {
            // return new string[] { "value1", "value2" };
            return App.Applications;
        }

        // GET: api/<EmployeeController>

        // GET api/<ApplicationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ApplicationController>
        [HttpPost]
        public void Post([FromBody] Application value)
        {
            App.Applications.Add(value);
            App.SaveChanges();
        }

        // PUT api/<ApplicationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Application value)
        {
            var employee = App.Applications.FirstOrDefault(s => s.ApplicationId == id);
            if (employee != null)
            {
                App.Entry<Application>(employee).CurrentValues.SetValues(value);
                App.SaveChanges();
            }

        }

        // DELETE api/<ApplicationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var student = App.Applications.FirstOrDefault(s => s.ApplicationId == id);
            if (student != null)
            {
                App.Applications.Remove(student);
                App.SaveChanges();
            }
        }
    }
}
