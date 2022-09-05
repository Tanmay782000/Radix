using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Module11.Models
{
    public partial class hospital2Context : DbContext
    {
        public hospital2Context()
        {
        }

        public hospital2Context(DbContextOptions<hospital2Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<DoctorDetail> DoctorDetails { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<DrugsDetail> DrugsDetails { get; set; }
        public virtual DbSet<HealthCareAssistant> HealthCareAssistants { get; set; }
        public virtual DbSet<PatientDetail> PatientDetails { get; set; }
        public virtual DbSet<Report> Reports { get; set; }
        public virtual DbSet<PatientReport> PatientReport { get; set; }
        
        public object fetch { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=PC0464\\MSSQL2019;Database=hospital2;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");
            

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.Property(e => e.DepartmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DoctorDetail>(entity =>
            {
                entity.HasKey(e => e.DoctorId)
                    .HasName("PK__DoctorDe__2DC00EDF21BBCC48");

                entity.Property(e => e.DoctorId)
                    .ValueGeneratedNever()
                    .HasColumnName("DoctorID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.Education)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Specialization)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.DoctorDetails)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK__DoctorDet__Depar__38996AB5");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugId)
                    .ValueGeneratedNever()
                    .HasColumnName("DrugID");

                entity.Property(e => e.DrugName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugType)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugUse)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DrugsDetail>(entity =>
            {
                entity.HasKey(e => e.DrugId)
                    .HasName("PK__DrugsDet__908D66F69C0CF480");

                entity.Property(e => e.DrugId)
                    .ValueGeneratedNever()
                    .HasColumnName("DrugID");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Usage)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HealthCareAssistant>(entity =>
            {
                entity.HasKey(e => e.HcaId)
                    .HasName("PK__HealthCa__342963260E40798C");

                entity.ToTable("HealthCareAssistant");

                entity.Property(e => e.HcaId)
                    .ValueGeneratedNever()
                    .HasColumnName("HcaID");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.Education)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.HealthCareAssistants)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK__HealthCar__Depar__3B75D760");
            });

            modelBuilder.Entity<PatientDetail>(entity =>
            {
                entity.HasKey(e => e.PatientId)
                    .HasName("PK__PatientD__970EC3461D97C800");

                entity.Property(e => e.PatientId)
                    .ValueGeneratedNever()
                    .HasColumnName("PatientID");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.BloodGroup)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.PatientDetails)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK__PatientDe__Depar__3E52440B");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.PatientDetails)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__PatientDe__Docto__3F466844");
            });

            modelBuilder.Entity<Report>(entity =>
            {
                entity.ToTable("report");

                entity.Property(e => e.ReportId).ValueGeneratedNever();

                entity.Property(e => e.Dosage)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.Summery)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.DrugsNavigation)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.Drugs)
                    .HasConstraintName("FK__report__Drugs__48CFD27E");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__report__PatientI__46E78A0C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
