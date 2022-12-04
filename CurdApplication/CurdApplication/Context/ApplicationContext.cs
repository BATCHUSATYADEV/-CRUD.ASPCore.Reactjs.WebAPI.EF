using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application_Api.Context

{
    using Application_Api.Model;
    using Microsoft.EntityFrameworkCore;
    //using WebApiCoreWithEF.Models;
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)

        {

        }

        public DbSet<Application> Applications {
            get; set;
        }
    }
}
