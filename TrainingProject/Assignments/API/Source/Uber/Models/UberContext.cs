//using System;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata;

//#nullable disable

//namespace Uber.Models
//{
//    public partial class UberContext : DbContext
//    {
//        public UberContext()
//        {
//        }

//        public UberContext(DbContextOptions<UberContext> options)
//            : base(options)
//        {
//        }

//        public virtual DbSet<AdminDetail> AdminDetails { get; set; }
//        public virtual DbSet<BookedService> BookedServices { get; set; }
//        public virtual DbSet<BookingRequest> BookingRequests { get; set; }
//        public virtual DbSet<CompletedService> CompletedServices { get; set; }
//        public virtual DbSet<Customer> Customers { get; set; }
//        public virtual DbSet<DiverConfirmationDetail> DiverConfirmationDetails { get; set; }
//        public virtual DbSet<Driver> Drivers { get; set; }
//        public virtual DbSet<LocationDetail> LocationDetails { get; set; }
//        public virtual DbSet<ObjectDetail> ObjectDetails { get; set; }
//        public virtual DbSet<ObjectType> ObjectTypes { get; set; }
//        public virtual DbSet<Payment> Payments { get; set; }
//        public virtual DbSet<PhoneNo> PhoneNos { get; set; }
//        public virtual DbSet<VehicleDetail> VehicleDetails { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//                optionsBuilder.UseSqlServer("Server=PC0464\\MSSQL2019;Database=Uber;Trusted_Connection=True;");
//            }
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

//            modelBuilder.Entity<AdminDetail>(entity =>
//            {
//                entity.HasKey(e => e.AdminId)
//                    .HasName("PK__ADMIN_DE__59AF14B52A37D74D");

//                entity.ToTable("ADMIN_DETAILS");

//                entity.Property(e => e.AdminId).HasColumnName("ADMIN_ID");

//                entity.Property(e => e.AdminName)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("ADMIN_NAME");

//                entity.Property(e => e.AdminPassword)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("ADMIN_PASSWORD");

//                entity.Property(e => e.AdminUsername)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("ADMIN_USERNAME");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");
//            });

//            modelBuilder.Entity<BookedService>(entity =>
//            {
//                entity.HasKey(e => e.BookedService1)
//                    .HasName("PK__BOOKED_S__E9E5FB3ED00A32C4");

//                entity.ToTable("BOOKED_SERVICE");

//                entity.Property(e => e.BookedService1).HasColumnName("BOOKED_SERVICE");

//                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.PatmentId).HasColumnName("PATMENT_ID");

//                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

//                entity.Property(e => e.StatusId).HasColumnName("STATUS_ID");

//                entity.Property(e => e.VehicleDetailsId).HasColumnName("VEHICLE_DETAILS_ID");

//                entity.HasOne(d => d.Booking)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.BookingId)
//                    .HasConstraintName("FK_BOOKING_REQUEST");

//                entity.HasOne(d => d.Driver)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.DriverId)
//                    .HasConstraintName("FK__BOOKED_SE__DRIVE__5441852A");

//                entity.HasOne(d => d.Patment)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.PatmentId)
//                    .HasConstraintName("FK__BOOKED_SE__PATME__5535A963");

//                entity.HasOne(d => d.Phone)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.PhoneId)
//                    .HasConstraintName("FK__BOOKED_SE__PHONE__151B244E");

//                entity.HasOne(d => d.Status)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.StatusId)
//                    .HasConstraintName("FK__BOOKED_SE__STATU__5629CD9C");

//                entity.HasOne(d => d.VehicleDetails)
//                    .WithMany(p => p.BookedServices)
//                    .HasForeignKey(d => d.VehicleDetailsId)
//                    .HasConstraintName("FK__BOOKED_SE__VEHIC__534D60F1");
//            });

//            modelBuilder.Entity<BookingRequest>(entity =>
//            {
//                entity.HasKey(e => e.BookingId)
//                    .HasName("PK__BOOKING___C1EBE7B3467222BE");

//                entity.ToTable("BOOKING_REQUEST");

//                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.Destination).HasColumnName("DESTINATION");

//                entity.Property(e => e.Distance).HasColumnName("DISTANCE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

//                entity.Property(e => e.Source).HasColumnName("SOURCE");

//                entity.Property(e => e.StatusId)
//                    .HasColumnName("STATUS_ID")
//                    .HasDefaultValueSql("((10))");

//                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

//                entity.HasOne(d => d.DestinationNavigation)
//                    .WithMany(p => p.BookingRequestDestinationNavigations)
//                    .HasForeignKey(d => d.Destination)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__BOOKING_R__DESTI__45F365D3");

//                entity.HasOne(d => d.Phone)
//                    .WithMany(p => p.BookingRequests)
//                    .HasForeignKey(d => d.PhoneId)
//                    .HasConstraintName("FK__BOOKING_R__PHONE__14270015");

//                entity.HasOne(d => d.SourceNavigation)
//                    .WithMany(p => p.BookingRequestSourceNavigations)
//                    .HasForeignKey(d => d.Source)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__BOOKING_R__SOURC__44FF419A");

//                entity.HasOne(d => d.Status)
//                    .WithMany(p => p.BookingRequestStatuses)
//                    .HasForeignKey(d => d.StatusId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__BOOKING_R__STATU__46E78A0C");

//                entity.HasOne(d => d.Vehicle)
//                    .WithMany(p => p.BookingRequestVehicles)
//                    .HasForeignKey(d => d.VehicleId)
//                    .HasConstraintName("FK__BOOKING_R__VEHIC__160F4887");
//            });

//            modelBuilder.Entity<CompletedService>(entity =>
//            {
//                entity.HasKey(e => e.Serviceid)
//                    .HasName("PK__COMPLETE__CE63E0766F8530F6");

//                entity.ToTable("COMPLETED_SERVICE");

//                entity.Property(e => e.Serviceid).HasColumnName("SERVICEID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.Feedback)
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("FEEDBACK");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.Ratings).HasColumnName("RATINGS");
//            });

//            modelBuilder.Entity<Customer>(entity =>
//            {
//                entity.ToTable("CUSTOMER");

//                entity.Property(e => e.CustomerId).HasColumnName("CUSTOMER_ID");

//                entity.Property(e => e.Address)
//                    .IsRequired()
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("ADDRESS");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.Email)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("EMAIL");

//                entity.Property(e => e.FirstName)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("FIRST_NAME");

//                entity.Property(e => e.LastName)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("LAST_NAME");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.Password)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("PASSWORD");

//                entity.Property(e => e.PhoneNo).HasColumnName("PHONE_NO");

//                entity.HasOne(d => d.PhoneNoNavigation)
//                    .WithMany(p => p.Customers)
//                    .HasForeignKey(d => d.PhoneNo)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__CUSTOMER__PHONE___3F466844");
//            });

//            modelBuilder.Entity<DiverConfirmationDetail>(entity =>
//            {
//                entity.HasKey(e => e.DcDetailsId)
//                    .HasName("PK__DIVER_CO__66B6C8DF97A3ACA3");

//                entity.ToTable("DIVER_CONFIRMATION_DETAILS");

//                entity.Property(e => e.DcDetailsId).HasColumnName("DC_DETAILS_ID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.StatusId)
//                    .HasColumnName("STATUS_ID")
//                    .HasDefaultValueSql("((13))");

//                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

//                entity.HasOne(d => d.Driver)
//                    .WithMany(p => p.DiverConfirmationDetails)
//                    .HasForeignKey(d => d.DriverId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__DIVER_CON__DRIVE__59063A47");

//                entity.HasOne(d => d.Status)
//                    .WithMany(p => p.DiverConfirmationDetails)
//                    .HasForeignKey(d => d.StatusId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__DIVER_CON__STATU__5AEE82B9");

//                entity.HasOne(d => d.Vehicle)
//                    .WithMany(p => p.DiverConfirmationDetails)
//                    .HasForeignKey(d => d.VehicleId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__DIVER_CON__VEHIC__59FA5E80");
//            });

//            modelBuilder.Entity<Driver>(entity =>
//            {
//                entity.ToTable("DRIVER");

//                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

//                entity.Property(e => e.Address)
//                    .IsRequired()
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("ADDRESS");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.Email)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("EMAIL");

//                entity.Property(e => e.FirstName)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("FIRST_NAME");

//                entity.Property(e => e.LastName)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("LAST_NAME");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.Password)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("PASSWORD");

//                entity.Property(e => e.PhoneNo).HasColumnName("PHONE_NO");

//                entity.Property(e => e.ProfilePhoto)
//                    .HasMaxLength(60)
//                    .IsUnicode(false)
//                    .HasColumnName("PROFILE_PHOTO");
//            });

//            modelBuilder.Entity<LocationDetail>(entity =>
//            {
//                entity.HasKey(e => e.LocationDetails)
//                    .HasName("PK__LOCATION__ABB64FDA88FC4870");

//                entity.ToTable("LOCATION_DETAILS");

//                entity.Property(e => e.LocationDetails).HasColumnName("LOCATION_DETAILS");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.Latitude)
//                    .IsRequired()
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("LATITUDE");

//                entity.Property(e => e.LocationAddress)
//                    .IsRequired()
//                    .HasMaxLength(200)
//                    .IsUnicode(false)
//                    .HasColumnName("LOCATION_ADDRESS");

//                entity.Property(e => e.LocationName)
//                    .IsRequired()
//                    .HasMaxLength(60)
//                    .IsUnicode(false)
//                    .HasColumnName("LOCATION_NAME");

//                entity.Property(e => e.Longitude)
//                    .IsRequired()
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("LONGITUDE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.Pincode).HasColumnName("PINCODE");
//            });

//            modelBuilder.Entity<ObjectDetail>(entity =>
//            {
//                entity.HasKey(e => e.ObjectDetailsId)
//                    .HasName("PK__OBJECT_D__9A0955799A7C6D2E");

//                entity.ToTable("OBJECT_DETAILS");

//                entity.Property(e => e.ObjectDetailsId).HasColumnName("OBJECT_DETAILS_ID");

//                entity.Property(e => e.ObjName)
//                    .IsRequired()
//                    .HasMaxLength(70)
//                    .IsUnicode(false)
//                    .HasColumnName("OBJ_NAME");

//                entity.Property(e => e.ObjectTypeId).HasColumnName("OBJECT_TYPE_ID");

//                entity.HasOne(d => d.ObjectType)
//                    .WithMany(p => p.ObjectDetails)
//                    .HasForeignKey(d => d.ObjectTypeId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__OBJECT_DE__OBJEC__38996AB5");
//            });

//            modelBuilder.Entity<ObjectType>(entity =>
//            {
//                entity.HasKey(e => e.ObjTypeId)
//                    .HasName("PK__OBJECT_T__04196874EC502027");

//                entity.ToTable("OBJECT_TYPES");

//                entity.Property(e => e.ObjTypeId).HasColumnName("OBJ_TYPE_ID");

//                entity.Property(e => e.ObjName)
//                    .IsRequired()
//                    .HasMaxLength(70)
//                    .IsUnicode(false)
//                    .HasColumnName("OBJ_NAME");
//            });

//            modelBuilder.Entity<Payment>(entity =>
//            {
//                entity.ToTable("PAYMENT");

//                entity.Property(e => e.PaymentId).HasColumnName("PAYMENT_ID");

//                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

//                entity.Property(e => e.BookingId).HasColumnName("BOOKING_ID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.PaymentMethod).HasColumnName("PAYMENT_METHOD");

//                entity.HasOne(d => d.Booking)
//                    .WithMany(p => p.Payments)
//                    .HasForeignKey(d => d.BookingId)
//                    .HasConstraintName("FK__PAYMENT__BOOKING__17F790F9");

//                entity.HasOne(d => d.PaymentMethodNavigation)
//                    .WithMany(p => p.Payments)
//                    .HasForeignKey(d => d.PaymentMethod)
//                    .HasConstraintName("FK__PAYMENT__PAYMENT__17036CC0");
//            });

//            modelBuilder.Entity<PhoneNo>(entity =>
//            {
//                entity.HasKey(e => e.PhoneId)
//                    .HasName("PK__PHONE_NO__1BB5AF5F1E44C9AC");

//                entity.ToTable("PHONE_NO");

//                entity.Property(e => e.PhoneId).HasColumnName("PHONE_ID");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.PhoneNo1).HasColumnName("PHONE_NO");
//            });

//            modelBuilder.Entity<VehicleDetail>(entity =>
//            {
//                entity.HasKey(e => e.VehicleId)
//                    .HasName("PK__VEHICLE___7F2CA35023179CB3");

//                entity.ToTable("VEHICLE_DETAILS");

//                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

//                entity.Property(e => e.Adharchad)
//                    .IsRequired()
//                    .HasMaxLength(100)
//                    .IsUnicode(false)
//                    .HasColumnName("ADHARCHAD");

//                entity.Property(e => e.CreateDate)
//                    .HasColumnType("date")
//                    .HasColumnName("CREATE_DATE");

//                entity.Property(e => e.DriverId).HasColumnName("DRIVER_ID");

//                entity.Property(e => e.License)
//                    .IsRequired()
//                    .HasMaxLength(40)
//                    .IsUnicode(false)
//                    .HasColumnName("LICENSE");

//                entity.Property(e => e.ModifiedDate)
//                    .HasColumnType("date")
//                    .HasColumnName("MODIFIED_DATE");

//                entity.Property(e => e.Rcbook)
//                    .IsRequired()
//                    .HasMaxLength(50)
//                    .IsUnicode(false)
//                    .HasColumnName("RCBOOK");

//                entity.Property(e => e.VehicleType).HasColumnName("VEHICLE_TYPE");

//                entity.HasOne(d => d.Driver)
//                    .WithMany(p => p.VehicleDetails)
//                    .HasForeignKey(d => d.DriverId)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__VEHICLE_D__DRIVE__4E88ABD4");

//                entity.HasOne(d => d.VehicleTypeNavigation)
//                    .WithMany(p => p.VehicleDetails)
//                    .HasForeignKey(d => d.VehicleType)
//                    .OnDelete(DeleteBehavior.ClientSetNull)
//                    .HasConstraintName("FK__VEHICLE_D__VEHIC__4F7CD00D");
//            });

//            OnModelCreatingPartial(modelBuilder);
//        }

//        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
//    }
//}
