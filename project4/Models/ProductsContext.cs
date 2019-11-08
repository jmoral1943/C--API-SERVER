using Microsoft.EntityFrameworkCore;


namespace project4.Models
{
    public class ProductsContext : DbContext
    {
        public ProductsContext()
        { }
        public ProductsContext(DbContextOptions<ProductsContext> options) : base(options)
        { }
        public DbSet<Products> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { optionsBuilder.UseMySql("Server=localhost;Port=3306;Database=project4;User=root;Password=password;Connection Timeout=0;Default Command Timeout=0;"); }
    }
}
