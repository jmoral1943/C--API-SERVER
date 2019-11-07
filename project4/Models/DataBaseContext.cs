using Microsoft.EntityFrameworkCore;

namespace project4.Models
{

  public class DataBaseContext : DbContext
   {
            public DataBaseContext(DbContextOptions<DataBaseContext> options) :
                base(options) { }
            public DbSet<Products> Products { get; set; }
   }
   
}
