

//using System.ComponentModel.DataAnnotations.Schema;

namespace Application_Api.Model
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    [Table("Application")]
    public class Application
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ApplicationId
        {
            get; set; 
        }
        public String ApplicationName
        {
            get; set;
        }
        public String ApplicationEmail
        {
            get; set;
        }
        public String ApplicationDob
        {
            get; set;
        }
    }
}
