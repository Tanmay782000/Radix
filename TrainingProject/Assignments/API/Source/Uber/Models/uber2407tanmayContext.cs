using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Uber.Models
{
    public partial class uber2407tanmayContext : DbContext
    {
        public uber2407tanmayContext()
        {
        }

        public uber2407tanmayContext(DbContextOptions<uber2407tanmayContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminDetail> AdminDetails { get; set; }
        public virtual DbSet<BookedService> BookedServices { get; set; }
        public virtual DbSet<BookingRequest> BookingRequests { get; set; }
        public virtual DbSet<CompletedService> CompletedServices { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<DiverConfirmationDetail> DiverConfirmationDetails { get; set; }
        public virtual DbSet<Driver> Drivers { get; set; }
        public virtual DbSet<LocationDetail> LocationDetails { get; set; }
        public virtual DbSet<ObjectDetail> ObjectDetails { get; set; }
        public virtual DbSet<ObjectType> ObjectTypes { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<PhoneNo> PhoneNos { get; set; }
        public virtual DbSet<RidePin> RidePins { get; set; }
        public virtual DbSet<VehicleDetail> VehicleDetails { get; set; }
        public virtual DbSet<CustomDTO> CustomDTOs { get; set; }
        public virtual DbSet<DriverHistoryDTO> DriverHistoryDTOs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=43.204.134.14;Initial Catalog=uber-2407-tanmay;User ID=uber-2407-tanmay;Password=F2Xwro8mDSP4gR9;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AdminDetail>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__ADMIN_DE__59AF14B50C2F5F89");

                entity.ToTable("ADMIN_DETAILS");

                entity.Property(e => e.AdminId).HasColumnName("ADMIN_ID");

                entity.Property(e => e.AdminName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ADMIN_NAME");

                entity.Property(e => e.AdminPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ADMIN_PASSWORD");

                entity.Property(e => e.AdminUsername)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("ADMIN_USERNAME");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");
            });

            modelBuilder.Entity<BookedService>(entity =>
            {
                entity.HasKey(e => e.BookedService1)
                    .HasName("PK__BOOKED_S__E9E5FB3ED1C95F57");

                entity.ToTable("BOOKED_SERVICE");

                entity.Property(e => e.BookedService1).HasColumnName("BOOKED_SERVICE");

                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.PatmentId).HasColumnName("PATMENT_ID");

                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

                entity.Property(e => e.StatusId).HasColumnName("STATUS_ID");

                entity.Property(e => e.VehicleDetailsId).HasColumnName("VEHICLE_DETAILS_ID");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.BookedServices)
                    .HasForeignKey(d => d.BookingId)
                    .HasConstraintName("FK__BOOKED_SE__BOOKI__6EF57B66");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.BookedServices)
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("FK__BOOKED_SE__DRIVE__6754599E");

                entity.HasOne(d => d.Patment)
                    .WithMany(p => p.BookedServices)
                    .HasForeignKey(d => d.PatmentId)
                    .HasConstraintName("FK__BOOKED_SE__PATME__68487DD7");

                entity.HasOne(d => d.Phone)
                    .WithMany(p => p.BookedServices)
                    .HasForeignKey(d => d.PhoneId)
                    .HasConstraintName("FK__BOOKED_SE__PHONE__70DDC3D8");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.BookedServices)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK__BOOKED_SE__STATU__693CA210");
            });

            modelBuilder.Entity<BookingRequest>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__BOOKING___C1EBE7B3D02E8660");

                entity.ToTable("BOOKING_REQUEST");

                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.Destination).HasColumnName("DESTINATION");

                entity.Property(e => e.Distance).HasColumnName("DISTANCE");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

                entity.Property(e => e.Source).HasColumnName("SOURCE");

                entity.Property(e => e.StatusId)
                    .HasColumnName("STATUS_ID")
                    .HasDefaultValueSql("((10))");

                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

                entity.HasOne(d => d.DestinationNavigation)
                    .WithMany(p => p.BookingRequestDestinationNavigations)
                    .HasForeignKey(d => d.Destination)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BOOKING_R__DESTI__5070F446");

                entity.HasOne(d => d.Phone)
                    .WithMany(p => p.BookingRequests)
                    .HasForeignKey(d => d.PhoneId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BOOKING_R__PHONE__4E88ABD4");

                entity.HasOne(d => d.SourceNavigation)
                    .WithMany(p => p.BookingRequestSourceNavigations)
                    .HasForeignKey(d => d.Source)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BOOKING_R__SOURC__4F7CD00D");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.BookingRequestStatuses)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BOOKING_R__STATU__52593CB8");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.BookingRequestVehicles)
                    .HasForeignKey(d => d.VehicleId)
                    .HasConstraintName("FK__BOOKING_R__VEHIC__6A30C649");
            });

            modelBuilder.Entity<CompletedService>(entity =>
            {
                entity.HasKey(e => e.Serviceid)
                    .HasName("PK__COMPLETE__CE63E076506AB05C");

                entity.ToTable("COMPLETED_SERVICE");

                entity.Property(e => e.Serviceid).HasColumnName("SERVICEID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.Feedback)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("FEEDBACK");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.Ratings).HasColumnName("RATINGS");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("CUSTOMER");

                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.PhoneNo).HasColumnName("PHONE_NO");

                entity.HasOne(d => d.PhoneNoNavigation)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.PhoneNo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CUSTOMER__PHONE___2D27B809");
            });

            modelBuilder.Entity<DiverConfirmationDetail>(entity =>
            {
                entity.HasKey(e => e.DcDetailsId)
                    .HasName("PK__DIVER_CO__66B6C8DF0CC05C86");

                entity.ToTable("DIVER_CONFIRMATION_DETAILS");

                entity.Property(e => e.DcDetailsId).HasColumnName("DC_DETAILS_ID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.StatusId)
                    .HasColumnName("STATUS_ID")
                    .HasDefaultValueSql("((13))");

                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.DiverConfirmationDetails)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DIVER_CON__DRIVE__46E78A0C");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.DiverConfirmationDetails)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DIVER_CON__STATU__48CFD27E");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.DiverConfirmationDetails)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DIVER_CON__VEHIC__47DBAE45");
            });

            modelBuilder.Entity<Driver>(entity =>
            {
                entity.ToTable("DRIVER");

                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("FIRST_NAME");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("LAST_NAME");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.PhoneNo).HasColumnName("PHONE_NO");

                entity.Property(e => e.ProfilePhoto)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("PROFILE_PHOTO");
            });

            modelBuilder.Entity<LocationDetail>(entity =>
            {
                entity.HasKey(e => e.LocationDetails)
                    .HasName("PK__LOCATION__ABB64FDAB8C43E57");

                entity.ToTable("LOCATION_DETAILS");

                entity.Property(e => e.LocationDetails).HasColumnName("LOCATION_DETAILS");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.Latitude)
                    .HasColumnType("decimal(15, 8)")
                    .HasColumnName("LATITUDE");

                entity.Property(e => e.LocationAddress)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("LOCATION_ADDRESS");

                entity.Property(e => e.LocationName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("LOCATION_NAME");

                entity.Property(e => e.Longitude)
                    .HasColumnType("decimal(15, 8)")
                    .HasColumnName("LONGITUDE");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.Pincode).HasColumnName("PINCODE");
            });

            modelBuilder.Entity<ObjectDetail>(entity =>
            {
                entity.HasKey(e => e.ObjectDetailsId)
                    .HasName("PK__OBJECT_D__9A095579E5B84A58");

                entity.ToTable("OBJECT_DETAILS");

                entity.Property(e => e.ObjectDetailsId).HasColumnName("OBJECT_DETAILS_ID");

                entity.Property(e => e.ObjName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("OBJ_NAME");

                entity.Property(e => e.ObjectTypeId).HasColumnName("OBJECT_TYPE_ID");

                entity.HasOne(d => d.ObjectType)
                    .WithMany(p => p.ObjectDetails)
                    .HasForeignKey(d => d.ObjectTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OBJECT_DE__OBJEC__267ABA7A");
            });

            modelBuilder.Entity<ObjectType>(entity =>
            {
                entity.HasKey(e => e.ObjTypeId)
                    .HasName("PK__OBJECT_T__041968747912880F");

                entity.ToTable("OBJECT_TYPES");

                entity.Property(e => e.ObjTypeId).HasColumnName("OBJ_TYPE_ID");

                entity.Property(e => e.ObjName)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("OBJ_NAME");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("PAYMENT");

                entity.Property(e => e.PaymentId).HasColumnName("PAYMENT_ID");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.PaymentMethod).HasColumnName("PAYMENT_METHOD");

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.BookingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PAYMENT__BOOKING__5FB337D6");

                entity.HasOne(d => d.PaymentMethodNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.PaymentMethod)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PAYMENT__PAYMENT__60A75C0F");
            });

            modelBuilder.Entity<PhoneNo>(entity =>
            {
                entity.HasKey(e => e.PhoneId)
                    .HasName("PK__PHONE_NO__1BB5AF5F733B643B");

                entity.ToTable("PHONE_NO");

                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.MobileNo).HasColumnName("Mobile_No");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");
            });

            modelBuilder.Entity<RidePin>(entity =>
            {
                entity.HasKey(e => e.RidePin1)
                    .HasName("PK__RidePin__6B50AA248038145B");

                entity.ToTable("RidePin");

                entity.Property(e => e.RidePin1).HasColumnName("RidePin");

                entity.Property(e => e.BooingId).HasColumnName("Booing_Id");

                entity.HasOne(d => d.Booing)
                    .WithMany(p => p.RidePins)
                    .HasForeignKey(d => d.BooingId)
                    .HasConstraintName("FK__RidePin__Booing___75A278F5");
            });

            modelBuilder.Entity<VehicleDetail>(entity =>
            {
                entity.HasKey(e => e.VehicleId)
                    .HasName("PK__VEHICLE___7F2CA3507242A39B");

                entity.ToTable("VEHICLE_DETAILS");

                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

                entity.Property(e => e.Adharchad)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("ADHARCHAD");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("CREATE_DATE");

                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

                entity.Property(e => e.License)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("LICENSE");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("date")
                    .HasColumnName("MODIFIED_DATE");

                entity.Property(e => e.Rcbook)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("RCBOOK");

                entity.Property(e => e.VehicleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.VehicleType).HasColumnName("VEHICLE_TYPE");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.VehicleDetails)
                    .HasForeignKey(d => d.DriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VEHICLE_D__DRIVE__3D5E1FD2");

                entity.HasOne(d => d.VehicleTypeNavigation)
                    .WithMany(p => p.VehicleDetails)
                    .HasForeignKey(d => d.VehicleType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VEHICLE_D__VEHIC__3E52440B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
