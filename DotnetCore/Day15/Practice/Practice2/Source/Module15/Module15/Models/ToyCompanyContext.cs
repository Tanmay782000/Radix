using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Module15.Models
{
    [Keyless]
    public partial class ToyCompanyContext : DbContext
    {
        public ToyCompanyContext()
        {
        }

        public ToyCompanyContext(DbContextOptions<ToyCompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<PlacedOrder> PlacedOrders { get; set; }
        public virtual DbSet<ToyManufectoringDetail> ToyManufectoringDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=PC0464\\MSSQL2019;Database=ToyCompany;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("CustomerID");

                entity.Property(e => e.CustAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustEmail)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PK__Departme__0148818ED1C5AB56");

                entity.ToTable("Department");

                entity.Property(e => e.DeptId)
                    .ValueGeneratedNever()
                    .HasColumnName("DeptID");

                entity.Property(e => e.DeptName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.AddressOfDelivery)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.OrderDate).HasColumnType("datetime");

                entity.Property(e => e.TotalAmount).HasColumnType("decimal(10, 2)");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Orders__Customer__5812160E");
            });

            modelBuilder.Entity<PlacedOrder>(entity =>
            {
                entity.HasKey(e => e.OrderPlacedId)
                    .HasName("PK__Placed_o__BE1CA8FD041FAF4A");

                entity.ToTable("Placed_order");

                entity.Property(e => e.OrderPlacedId).HasColumnName("Order_placed_Id");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.ToyId).HasColumnName("toyID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.PlacedOrders)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK__Placed_or__Order__5AEE82B9");

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.PlacedOrders)
                    .HasForeignKey(d => d.ToyId)
                    .HasConstraintName("FK__Placed_or__toyID__5BE2A6F2");
            });

            modelBuilder.Entity<ToyManufectoringDetail>(entity =>
            {
                entity.HasKey(e => e.ToyId)
                    .HasName("PK__ToyManuf__187746B6DB3BD9A0");

                entity.Property(e => e.ToyId)
                    .ValueGeneratedNever()
                    .HasColumnName("ToyID");

                entity.Property(e => e.DeptId).HasColumnName("DeptID");

                entity.Property(e => e.Guarantee)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Warrenty)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("warrenty");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.ToyManufectoringDetails)
                    .HasForeignKey(d => d.DeptId)
                    .HasConstraintName("FK__ToyManufe__DeptI__38996AB5");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
